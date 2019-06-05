import styled from 'styled-components';

export const StyledCoverLoader = styled.div<{transition: number; opacity: number}>`
    opacity: ${({opacity}) => opacity};
    transition: ${({transition}) => transition}ms;
`;