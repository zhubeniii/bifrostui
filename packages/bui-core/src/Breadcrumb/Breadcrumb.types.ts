import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type BreadcrumbItemProps<
  D extends React.ElementType = 'li',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 分隔符自定义
       */
      separator?: React.ReactNode;
      /**
       * body 区域内容
       */
      children?: React.ReactNode;
      /**
       * 点击事件
       */
      onClick?: (e: React.SyntheticEvent) => void;
    };
    defaultComponent: D;
  },
  D
>;

export type BreadcrumbProps<
  D extends React.ElementType = 'nav',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 路由栈信息
       */
      items?: Array<{
        /**
         * 名称
         */
        title?: string;
        /**
         * 分隔符自定义
         */
        separator?: React.ReactNode;
        /**
         * 点击事件
         */
        onClick?: (e: React.SyntheticEvent) => void;
      }>;
      /**
       * 分隔符自定义
       */
      separator?: React.ReactNode;
      /**
       * body 区域内容，使用 CollapseItem 进行渲染
       */
      children?: React.ReactNode;
    };
    defaultComponent: D;
  },
  D
>;
