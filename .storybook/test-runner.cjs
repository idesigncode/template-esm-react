module.exports = {
  async postRender(page) {
    // ? Reference: https://github.com/storybookjs/test-runner#dom-snapshot-recipe
    const elementHandler = await page.$('#storybook-root');
    const innerHTML = await elementHandler.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
};
