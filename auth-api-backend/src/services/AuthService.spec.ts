import AuthService from './AuthService';

jest.mock('../repositories/UserRepository');
jest.mock('./TokenService', () => ({
  generateToken: jest.fn()
}));

const mockUserRepository = require('../repositories/UserRepository');
const mockTokenService = require('./TokenService');

describe('AuthService', () => {

    let authService: AuthService;
    const user = {
        name: "user1",
        email: "user@email.com"
    }
    beforeEach(() => {
        authService = new AuthService(mockUserRepository, mockTokenService);
    });

  it('Should return a token for a valid user', async () => {
    mockUserRepository.getUser = jest.fn().mockImplementation(() => Promise.resolve(user));
    const token = await authService.authenticate('user1', 'password');
    expect(mockTokenService.generateToken).toBeCalledWith(user)
  });

  it('should return a object that indicates auth fails', async () => {
    mockUserRepository.getUser = jest.fn().mockImplementation(() => Promise.resolve(null));
    const token = await authService.authenticate('user1', 'password');
    expect(token).toMatchObject({
      success: false,
      token: '',
      user:  ''
    })
  });
});
