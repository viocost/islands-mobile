module.exports = {
    resolver: {
	extraNodeModules: {
	   crypto: require.resolve('react-native-crypto'), 
	   vm: require.resolve('vm-browserify'), 
	   stream: require.resolve('stream-browserify'), 
	},
    },
};
