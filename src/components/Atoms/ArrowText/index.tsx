import React, { FC, ReactNode } from 'react';
import cx from 'classnames';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSpan = styled.span`
  ${tw`relative inline-flex flex-row items-center gap-[0.5em] after:w-[0.55em] after:h-[0.55em] after:border-solid after:border-current after:border-l-0 after:border-b-0 after:border-r-[0.2em] after:border-t-[0.2em] after:rotate-45 transition-[gap] hover:gap-[0.7em]`}
`;

interface Props {
  className?: string;
  children: ReactNode;
}

const ArrowText: FC<Props> = ({ className, children }) => {
  const classNames = cx({ [className]: className });

  return <StyledSpan className={classNames}>{children}</StyledSpan>;
};
export default ArrowText;
