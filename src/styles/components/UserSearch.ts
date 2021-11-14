import styled from 'styled-components';

const UserSearch = styled.form`
  display: flex;
  padding: 15px;

  input {
    width: 100%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  button {
    border-left-width: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

export default UserSearch;
