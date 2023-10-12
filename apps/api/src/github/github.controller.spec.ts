import { Test, TestingModule } from '@nestjs/testing';
import { GithubController } from './github.controller';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { AxiosResponse } from 'axios';

describe('GithubController', () => {
  let githubController: GithubController;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubController],
      providers: [
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    githubController = module.get<GithubController>(GithubController);
    httpService = module.get<HttpService>(HttpService);
  });

  describe('getRepoInfo', () => {
    it('should return repo info and commits', async () => {
      const result = {
        repoInfo: { data: { id: 12345, name: 'test-repo' } },
        commits: { data: [{ id: 'abc123', message: 'Initial commit' }] },
      };

      const mockAxiosResponse = (data: any): AxiosResponse => ({
        data,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
        },
      });

      jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() =>
          of(mockAxiosResponse(result.repoInfo.data)),
        )
        .mockImplementationOnce(() =>
          of(mockAxiosResponse(result.commits.data)),
        );

      expect(await githubController.getRepoInfo('owner', 'repo')).toEqual({
        repoInfo: result.repoInfo.data,
        commits: result.commits.data,
      });
    });

    it('should throw NotFoundException when the repo is not found', async () => {
      jest.spyOn(httpService, 'get').mockImplementationOnce(() => {
        throw new Error();
      });

      const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

      await expect(
        githubController.getRepoInfo('owner', 'repo'),
      ).rejects.toThrowError();

      logSpy.mockRestore();
    });
  });
});
