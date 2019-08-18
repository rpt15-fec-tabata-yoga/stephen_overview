const React = require('react');
const { shallow } = require('enzyme');
const BannerImage = require('../BannerImage.jsx');

describe('BannerImage', () => {
  it('should render image with given url', () => {
    const image = 'https://steamimages.s3-us-west-1.amazonaws.com/header.jpg';
    const component = shallow(<BannerImage image={image} />);
    expect(component).toMatchSnapshot();
  })
})
