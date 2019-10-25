jest.genMockFromModule('dayjs');

module.exports = jest.fn(date => {
  return {
    format: jest.fn((() => date)),
  };
});