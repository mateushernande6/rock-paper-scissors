import styled from 'styled-components'

export const Options = styled.button`
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    font-size: 2rem;
    &:focus{
        display: none;
    }
    .pedra{
        color: #d11;
    }
    .papel{
        color: #dd0;
    }
    .tesoura{
        color: green;
    }
    background-color: #000 ;
`

export const ContainerPlayer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50vw;
    margin-top: 1rem;
`