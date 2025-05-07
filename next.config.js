module.exports = {
  webpack(config) {
    config.resolve.alias['@constants'] = path.join(__dirname, 'src/constants');
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['@utils'] = path.join(__dirname, 'src/utils');
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
    config.resolve.alias['@context'] = path.join(__dirname, 'src/context');
    
    // Thêm dòng này để fix một số lỗi liên quan đến alias khi deploy lên GitHub Pages
    config.resolve.modules.push(path.resolve('./src'));

    return config;
  },
};
