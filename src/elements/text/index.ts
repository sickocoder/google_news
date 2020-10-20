import styled from 'styled-components/native';
import { percentageSize } from '../../utils';
import { TextProps } from './text.types';

export const Text = styled.Text<TextProps>`
  font-size: ${(props) => percentageSize(props.size ? props.size : 2)};
`;
