import styled from 'styled-components/native';
import { percentageSize } from '../../utils';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background-color: #fff;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ContentCards = styled.View`
  width: 100%;
  height: ${percentageSize(30)};
`;

export const ContentLists = styled.View`
  flex: 1;
  background-color: #f5f7f9;
  border-top-left-radius: ${percentageSize(5.5)};
`;

export const Header = styled.View`
  width: 100%;
  height: 60px;
  background-color: #f0f;
`;

export const FooterMenu = styled(Header)`
  height: 80px;
  position: absolute;
  background-color: #fff;
  bottom: ${percentageSize(4.2)};
  border-top-left-radius: ${percentageSize(5.5)};
`;
