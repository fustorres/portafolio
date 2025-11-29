const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // para producción activa optimizaciones
  entry: './src/index.jsx', // archivo principal
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js', // Un nombre más estándar
    publicPath: '/servicios/news/',
    clean: true, // Limpia el directorio de salida antes de cada build
  },
  module: {
    rules: [
      {
        // Regla para archivos JavaScript y JSX
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        // Regla para archivos CSS
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Regla para assets de imágenes
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // reconocer estas extensiones
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'contacto.html', // plantilla para el archivo html principal
    }),
  ],
  performance: {
     hints: false,
  },
};