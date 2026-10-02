import styled from 'styled-components';


export const Div = styled.div`
    width:600px;
    height: 500px;

    @media (prefers-reduced-motion: reduce) {
        svg animate,
        svg animateMotion {
            display: none;
        }
    }
`