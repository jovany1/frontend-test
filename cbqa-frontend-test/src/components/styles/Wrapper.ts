import styled from 'styled-components';

const Wrapper = styled.main`
  column-count: 4;
  column-gap: 1rem;
  orphans: 1;
  widows: 1;
  margin: 40px 40px;

  @media (max-width: 1200px) {
    column-count: 3;
  }

  @media (max-width: 850px) {
    column-count: 2;
  }

  @media (max-width: 550px) {
    main {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .user-list {
      margin-bottom: 20px!important;
    }
  }
`;

export default Wrapper;
