import React, { PropsWithChildren } from 'react';

import { FilterLinkProps } from './interfaces';

import { Styled } from './styled';

export const Link = (props: PropsWithChildren<FilterLinkProps>) => {
    return (
        <Styled.AddButton disabled={props.isActive} onClick={props.onClick}>
            {props.children}
        </Styled.AddButton>
    );
};
