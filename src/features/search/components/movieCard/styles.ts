import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#ccc',
    shadowColor: '#333',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  imageContainer: {
    height: 220,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    flex: 1,
    borderRadius: 12,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    marginHorizontal: 8,
  },
  summary: {
    fontSize: 14,
    color: '#222',
  },
});
