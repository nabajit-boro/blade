import LoaderIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<LoaderIcon />', () => {
  it('should render LoaderIcon', () => {
    const renderTree = renderWithTheme(
      <LoaderIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});