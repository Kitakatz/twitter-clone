import React from 'react';
import Column from './column';
import { ColumnProps } from './column/interfaces';
import Row from './row';
import { RowProps } from './row/interfaces';

interface LayoutComponents {
  Row: React.FC<RowProps>;
  Column: React.FC<ColumnProps>;
};

const Layout: LayoutComponents = (): void => {};

Layout.Row = Row;
Layout.Column = Column;

export default Layout;