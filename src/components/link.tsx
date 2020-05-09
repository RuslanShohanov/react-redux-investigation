import React, { PropsWithChildren } from 'react';

import { LinkProps } from './interfaces';

import { Styled } from './styled';

export const Link = (props: PropsWithChildren<LinkProps>) => {
    return (
        <Styled.AddButton disabled={props.isActive} onClick={props.onClick}>
            {props.children}
        </Styled.AddButton>
    );
};
