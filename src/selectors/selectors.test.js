import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'akshay-goyal', firstName: 'Akshay', lastName: 'House'},
        {id: 'scott-allen',firstName: 'Scott',lastName: 'Allen'}
      ];

      const expected = [
        {value: 'akshay-goyal', text: 'Akshay House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
