import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F5DED5;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 1rem;
    font-size: 54px;
    color: #9C3913;
    font-weight: 700;
    margin-bottom: 20px;

    div{
        display: flex;
        justify-content: center;
        margin-top: 100px;
        padding-bottom: 20px;
        border-bottom: 4px solid rgba(156, 57, 19, 0.2);
        position: absolute;
        width: 50%;
    }
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
    height: fit-content;
    border-radius: 50px;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const Column = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`