import React, { PropsWithChildren } from 'react';

declare function Button({ children }: PropsWithChildren): React.JSX.Element;

declare function Typography({ children }: PropsWithChildren): React.JSX.Element;

declare function Viewer(): React.JSX.Element;

export { Button, Typography, Viewer };
