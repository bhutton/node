const awsMock = require('aws-sdk-mock');
const aws = require("../../AWS");

jest.mock('../../myFunction')
const myFunction = require('../../myFunction')
myFunction.getTest.mockImplementation(() => 'test')

describe('AWS Tests', () => {
  it('undefined', () => {
    expect(aws.AWS).toEqual(undefined);
  });

  it('response with data', async () => {
    return expect(aws.handler.apply()).resolves.toBe('test');
  });
});

awsMock.restore('SNS', 'publish');
awsMock.restore('DynamoDB');
awsMock.restore('S3');
