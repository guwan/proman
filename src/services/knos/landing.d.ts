export interface DataSources {
  componentDataSource: ComponentDataSource[];
}

export interface ComponentDataSource {
  componentName: string;
  dataSource: DataSource;
}

export interface DataSource {
  wrapper: ClassWrapper;
}

export interface NavDataSourceType extends DataSource {
  page: ClassWrapper;
  logo: ChildrenWrapper;
  menu?: NavChildrenWrapper;
  LinkMenu?: ChildrenWrapper;
  isScrollLink?: boolean;
  mobileMenu: ClassWrapper;
}

export interface ClassWrapper {
  className: string;
}

export interface NavChildrenWrapper {
  name?: string;
  className?: string;
  href?: string;
  to?: string;
  children?: NavChildrenWrapper[] | NavChildrenWrapper | string |React.ReactNode;
  subItem?: NavChildrenWrapper[] | NavChildrenWrapper | string;
  md?: number;
  xs?: number;
}


export interface ChildrenWrapper {
  name?: string;
  className?: string;
  href?: string;
  to?: string;
  children?: ChildrenWrapper[] | ChildrenWrapper | string;
  subItem?: ChildrenWrapper[] | string;
  childWrapper?: ChildrenWrapper;
  title?: ChildrenWrapper;
  md?: number;
  xs?: number;
  gutter?: number;
  icon?: ChildrenWrapper;
  textWrapper?: ClassWrapper;
  content?: ChildrenWrapper;
}

//export interface BannerDataSourceType : BannerChildrenWrapper[];


export interface BannerChildrenWrapper {
  name?: string;
  BannerElement?: BannerChildrenWrapper;
  page?: ClassWrapper;
  textWrapper?: ClassWrapper;
  bg?: ClassWrapper;
  title?: string;
  content?: string;
  button?: string;
  children?: BannerChildrenWrapper[] | BannerChildrenWrapper | string;
  className?: string;
  backgroundUrl?: string;
  href?: stirng;
}

export interface ContentDataSourceType extends DataSource {
  page: ClassWrapper;
  OverPack: { playScale: number; className?: string };
  titleWrapper?: ChildrenWrapper;
  childWrapper?: ChildrenWrapper;
  imgWrapper?: ChildrenWrapper;
  img?: ChildrenWrapper;
  title?: ChildrenWrapper;
  content?: ChildrenWrapper;
  block?: ChildrenWrapper;
}

export interface FooterDataSourceType extends DataSource {
  OverPack: { playScale: number; className: string };
  block: ChildrenWrapper;
  copyrightWrapper: ClassWrapper;
  copyrightPage: ClassWrapper;
  copyright: copyright;
}

export interface Copyright {
  className: string;
  children: Element;
}

export interface FooterChildrenWrapper {
  name?: string;
  className?: string;
  href?: string;
  to?: string;
  children?: ChildrenWrapper[] | string;
  subItem?: ChildrenWrapper[] | string;
  md?: number;
  xs?: number;
}

