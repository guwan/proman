import type honorDisplay from "@/pages/show/HonorDisplay";

export declare namespace API {
  type Result<T> = {
    code?: number;
    data?: T;
    msg?: string;
    success?: boolean;
    timestamp?: number;
  };
  type Result_<T> = {
    code?: number;
    data: T;
    msg?: string;
    success?: boolean;
    timestamp?: number;
  };
  type PageResult<T> = {
    code?: number;
    data: T;
    msg?: string;
    success?: boolean;
    timestamp?: number;
  };
  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type PageRes<T> = {
    current?: number;
    data: T;
    pageSize?: number;
    total?: number;
    success?: boolean;
  };

  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type InitialStateType = {
    settings?: LayoutSettings;
    currentUser?: API.Me;
    menu?: MenuDataItem[];
  };

  type UserItem = {
    id: number;
    name?: string;
    username?: username;
    avatar?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    country?: string;
    access?: string;
    address?: string;
    phone?: string;
    level?: number;
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    credentialsNonExpired?: boolean;
    enabled?: boolean;
    createdAt?: string;
    updateAt?: string;
    password?: string;
  };

  type RoleItem = {
    id: number;
    name?: string;
    authority?: string;
    mark?: string;
    sort?: number;
  };
  type RoleItemAddReq = {
    id?: number;
    name?: string;
    authority?: string;
    mark?: string;
    sort?: number;
  };

  type MenuItem = {
    id?: number;
    sort?: number;
    /** 资源类型：1菜单，2，接口 */
    type?: type;
    children?: MenuDataItem[];
    /** @name 在菜单中隐藏子节点 */
    hideChildrenInMenu?: boolean;
    /** @name 在菜单中隐藏自己和子节点 */
    hideInMenu?: boolean;
    /** @name 菜单的icon */
    icon?: string;
    /** @name 自定义菜单的国际化 key */
    locale?: string | false;
    /** @name 菜单的名字 */
    name?: string;
    showName?: string;
    /** @name 用于标定选中的值，默认是 path */
    key?: string;
    /** @name disable 菜单选项 */
    disabled?: boolean;
    /** @name 路径,可以设定为网页链接 */
    path?: string;
    /**
     * 当此节点被选中的时候也会选中 parentKeys 的节点
     *
     * @name 自定义父节点
     */
    parentKeys?: string[];
    /** @name 隐藏自己，并且将子节点提升到与自己平级 */
    flatMenu?: boolean;
    /** @name 指定外链打开形式，同a标签 */
    target?: string;
    parentId?: number;
  };
  type TreeDataSource = {
    checkedKeys?: Key[];
    treeData?: DataNode[];
  };

  type BlogListRes = {
    blogPage?: PageVoBlogVo_;
    categories?: Category[];
    category?: string;
    tag?: string;
    tags?: Tag[];
  };

  type BlogVo = {
    id?: number;
    title?: string;
    slug?: string;
    summary?: string;
    rowSummary?: string;
    content?: string;
    renderedContent?: string;
    categories?: Category[];
    tags?: Tag[];
    authorId?: number;
    author?: string;
    allowComment?: boolean;
    draft?: boolean;
    createdAt?: string;
    editPath?: string;
    modifiedAt?: string;
    previewPath?: string;
    publishAt?: string;
    updatePath?: string;
    commentsNum?: number;
    hits?: number;
    stars?: number;
    likes?: number;
    hot?: boolean;
    enabled?: boolean;
    preview?: boolean;
    hideInList?: boolean;
    hideInListTimeAfter?: string;
    hideInListTimeBefore?: string;
    cover?: string;
  };

  type BlogVoForList = {
    allowComment?: boolean;
    authorId?: number;
    categories?: Category[];
    commentsNum?: number;
    createdAt?: string;
    draft?: boolean;
    hits?: number;
    stars?: number;
    likes?: number;
    id?: number;
    modifiedAt?: string;
    publishAt?: string;
    slug?: string;
    summary?: string;
    tags?: Tag[];
    title?: string;
    content?: string;
    hideInList?: boolean;
    hideInListTimeAfter?: string;
    hideInListTimeBefore?: string;
    cover?: string;
  };

  type Category = {
    id?: number;
    name?: string;
    slug?: string;
    parent?: number;
    description?: string;
    enabled?: boolean;
    sort?: number;
  };

  type CategoryVo = {
    id?: number;
    name?: string;
    slug?: string;
    parent?: number;
    description?: string;
    enabled?: boolean;
    sort?: number;
    children?: CategoryVo[];
  };

  type CategoryCountDto = {
    count?: number;
    description?: string;
    id?: number;
    name?: string;
    parent?: number;
    slug?: string;
    sort?: number;
  };

  type Comment = {
    agent?: string;
    author?: string;
    authorId?: number;
    blogId?: number;
    content?: string;
    createdAt?: string;
    id?: number;
    ip?: string;
    mail?: string;
    ownerId?: number;
    parent?: number;
    renderedContent?: string;
    replyId?: number;
    replyName?: string;
    status?: string;
    type?: string;
    url?: string;
  };

  type CommonReq = {
    blogId?: number;
    parentId?: number;
    replyId?: number;
    replyName?: string;
    text?: string;
  };

  type DeleteReq = {
    ids: number[];
  };

  type Link = {
    href?: string;
    templated?: boolean;
  };

  type Me = {
    access?: string;
    avatar?: string;
    country?: string;
    email?: string;
    geographic?: string;
    group?: string;
    name?: string;
    notifyCount?: number;
    signature?: string;
    tags?: UserTag[];
    title?: string;
    unreadCount?: number;
    userid?: string;
  };

  type MenuAddReq = {
    disabled?: boolean;
    flatMenu?: boolean;
    hideChildrenInMenu?: boolean;
    hideInMenu?: boolean;
    icon?: string;
    id?: number;
    key?: string;
    locale?: string | false;
    name?: string;
    parentId?: number;
    parentKeys?: string;
    path?: string;
    showName?: string;
    sort?: number;
    target?: string;
    type?: number;
  };

  type MenuQueryReq = {
    disabled?: boolean;
    flatMenu?: boolean;
    hideChildrenInMenu?: boolean;
    hideInMenu?: boolean;
    icon?: string;
    id?: number;
    locale?: string;
    name?: string;
    parentId?: number;
    parentKeys?: string;
    path?: string;
    showName?: string;
    sort?: number;
    target?: string;
    type?: number;
  };

  type MenuQueryRes = {
    disabled?: boolean;
    flatMenu?: boolean;
    hideChildrenInMenu?: boolean;
    hideInMenu?: boolean;
    icon?: string;
    id?: number;
    key?: string;
    locale?: string;
    name?: string;
    parentId?: number;
    parentKeys?: string[];
    path?: string;
    showName?: string;
    sort?: number;
    target?: string;
    type?: number;
  };

  type MenuRes = {
    children?: MenuRes[];
    disabled?: boolean;
    flatMenu?: boolean;
    hideChildrenInMenu?: boolean;
    hideInMenu?: boolean;
    icon?: string;
    name?: string;
    parentKeys?: string[];
    path?: string;
    target?: string;
  };

  type PageBaseReq = {
    current?: number;
    pageSize?: number;
  };

  type PasswordUpdateReq = {
    id?: number;
    newPassword?: string;
    oldPassword?: string;
  };

  type RoleAddReq = {
    authority?: string;
    id?: number;
    mark?: string;
    name?: string;
    sort?: number;
  };

  type RoleQueryReq = {
    authority?: string;
    current?: number;
    id?: number;
    mark?: string;
    name?: string;
    pageSize?: number;
    sort?: number;
  };

  type RoleQueryRes = {
    authority?: string;
    id?: number;
    key?: number;
    mark?: string;
    name?: string;
    sort?: number;
  };

  type SelectKeysRes = {
    checkedKeys?: number[];
  };

  type SitePage = {
    authorId?: number;
    content?: string;
    createdAt?: string;
    draft?: boolean;
    hits?: number;
    id?: number;
    modifiedAt?: string;
    publishAt?: string;
    renderedContent?: string;
    slug?: string;
    summary?: string;
    title?: string;
  };

  type SitePageForm = {
    content?: string;
    createdAt?: string;
    draft?: boolean;
    id?: number;
    slug?: string;
    title?: string;
  };

  type SitePageVo = {
    authorId?: number;
    content?: string;
    createdAt?: string;
    draft?: boolean;
    hits?: number;
    id?: number;
    modifiedAt?: string;
    publishAt?: string;
    renderedContent?: string;
    slug?: string;
    summary?: string;
    title?: string;
  };

  type Tag = {
    id?: number;
    name?: string;
    slug?: string;
    sort?: number;
    createAt?: string;
  };

  type TagCountDto = {
    count?: number;
    id?: number;
    name?: string;
    slug?: string;
  };

  type Banner = {
    id?: number;
    sort?: number;
    title?: string;
    imgUrl?: string;
    linkUrl?: string;
    content?: string;
    button?: string;
    className?: string;
  };
  type Nav = {
    id?: number;
    label?: string;
    details?: string;
    icon?: string;
    url?: string;
    sort?: number;
    parent?: number;
  };

  type Dict = {
    id?: number;
    name?: string;
    type?: string;
    sort?: number;
    content?: string;
    description?: string;
  };
  type Attach = {
    id?: number;
    fileName?: string;
    fileType?: string;
    ossName?: string;
    ossBucket?: string;
    url?: string;
    used?: boolean;
    authorId?: number;
    createdAt?: string;
  };

  type FilesUploadType = {
    files: any;
  };

  type TreeData = {
    children?: TreeData[];
    id?: number;
    key?: number;
    parentId?: number;
    title?: string;
  };

  type TreeDataUpdateReq = {
    checkedKeys?: Key[];
    id?: number;
  };

  type UserAddReq = {
    access?: string;
    email?: string;
    enabled?: boolean;
    level?: number;
    name?: string;
    username?: string;
    password?: string;
    phone?: string;
    id?: number;
  };
  type UserUpdateReq = {
    access?: string;
    email?: string;
    enabled?: boolean;
    level?: number;
    name?: string;
    username?: username;
    password?: string;
    phone?: string;
    id: number;
  };

  type UserQueryReq = {
    current?: number;
    email?: string;
    enabled?: boolean;
    level?: number;
    name?: string;
    pageSize?: number;
    phone?: string;
    id?: number;
  };

  type UserQueryRes = {
    access?: string;
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    address?: string;
    avatar?: string;
    businessGroup?: string;
    country?: string;
    createdAt?: string;
    credentialsNonExpired?: boolean;
    email?: string;
    enabled?: boolean;
    geographic?: number;
    homeUrl?: string;
    job?: string;
    key?: string;
    level?: number;
    name?: string;
    phone?: string;
    signature?: string;
    tags?: UserTag[];
    title?: string;
    updateAt?: string;
    id: number;
    username?: string;
  };

  type UserRegisterReq = {
    agreeTerms?: string;
    captcha?: string;
    email?: string;
    job?: string;
    password?: string;
    phone?: string;
    retypePassword?: string;
    username?: string;
  };

  type UserTag = {
    id?: number;
    label?: string;
    userId?: number;
  };

  type PageReq<T> = {
    query?: T;
  };
  type PageReqCategory = {
    current?: number;
    pageSize?: number;
    query?: Category;
  };

  type PageReqTag = {
    query?: Tag;
  };

  type PageReqObject_ = {
    current?: number;
    pageSize?: number;
    query?: Record<string, any>;
  };

  type PageVoBlogVoForList = {
    current?: number;
    data?: BlogVoForList[];
    pageSize?: number;
    total?: number;
  };

  type PageVoBlogVo_ = {
    current?: number;
    data?: BlogVo[];
    pageSize?: number;
    total?: number;
  };

  type PageVoCategory = {
    current?: number;
    data: Category[];
    pageSize?: number;
    total?: number;
  };

  type PageVoComment_ = {
    current?: number;
    data?: Comment[];
    pageSize?: number;
    total?: number;
  };

  type PageVoMenuQueryRes = PageRes<MenuQueryRes[]>;

  type PageVoRoleQueryRes_ = {
    current?: number;
    data: RoleQueryRes[];
    pageSize?: number;
    total?: number;
  };

  type PageVoSitePageVo_ = {
    current?: number;
    data?: SitePageVo[];
    pageSize?: number;
    total?: number;
  };

  type PageVoTag_ = {
    current?: number;
    data?: Tag[];
    pageSize?: number;
    total?: number;
  };

  type PageVoUserQueryRes = {
    current?: number;
    data: UserQueryRes[];
    pageSize?: number;
    total?: number;
  };

  type ResultAllTreeConfigRes = {
    code?: number;
    data?: TreeDataSource;
    msg?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResultSelectKeysRes_ = {
    code?: number;
    data?: SelectKeysRes;
    msg?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResultObject_ = {
    code?: number;
    data?: Record<string, any>;
    msg?: string;
    success?: boolean;
    timestamp?: number;
  };
  type LoginResult = {
    loginType?: string;
    token?: string;
  };
  type CaptchaVo = {
    imageData: string;
    captchaKey: string;
  };
  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };
  type ResultObject = {
    code?: number;
    msg?: string;
    success?: boolean;
    timestamp?: number;
  };

  type loginUsingPOSTParams = {
    /** Password */
    password?: string;
    /** Username */
    username?: string;
    type?: string;
    autoLogin?: boolean;
    captchaKey?: string;
    captcha?: string;
  };

  type registerTokenUsingPOSTParams = {
    /** token */
    token: string;
  };

  type listPublishedPostsUsingGETParams = {
    category?: string;
    current?: number;
    pageSize?: number;
    tag?: string;
  };

  type createBlogReq = {
    allowComment?: boolean;
    allowFeed?: boolean;
    allowPing?: boolean;
    categories?: Category[];
    content?: string;
    createdAt?: string;
    draft?: boolean;
    slug?: string;
    tags?: Tag[];
    title?: string;
    hideInList?: boolean;
    hideInListTimeAfter?: string;
    hideInListTimeBefore?: string;
  };

  type refreshBlogPostsUsingPOSTParams = {
    /** page */
    page?: number;
    /** size */
    size?: number;
  };

  type getBlogByIdUsingGETParams = {
    /** cp */
    cp?: string;
    /** slug */
    slug: string;
  };

  type deletePost = {
    /** blogId */
    blogId: number;
    slug: string;
  };

  type editBlogUsingGETParams = {
    /** blogId */
    blogId: number;
    /** slug */
    slug: string;
  };

  type updateBlogReq = {
    allowComment?: boolean;
    allowFeed?: boolean;
    allowPing?: boolean;
    /** blogId */
    id: number;
    categories?: Category[];
    content?: string;
    createdAt?: string;
    draft?: boolean;
    hot?: boolean;
    slug?: string;
    tags?: Tag[];
    title?: string;
    summary?: string;
    authorId?: number;
    publishAt?: string;
    hits?: number;
    hideInList?: boolean;
    hideInListTimeAfter?: string;
    hideInListTimeBefore?: string;
    cover?: string;
  };

  type getBlogById = {
    /** cp */
    cp?: string;
    /** slug */
    slug?: string;
    id?: number;
  };

  type previewUsingGETParams = {
    /** cp */
    cp?: string;
    /** slug */
    slug: string;
  };

  type listPublishedPostsForCategoryUsingGETParams = {
    /** category */
    category: string;
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
  };

  type listPublishedPostsForTagUsingGETParams = {
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
    /** tag */
    tag: string;
  };

  type meUsingGETParams = {
    name?: string;
  };

  type queryUserRoleUsingPOSTParams = {
    /** id */
    id: number;
  };
  type selectOption = {
    label?: string;
    value?: string;
  }
  /*前台博客列表页面的数据结构，包含分页信息，博客列表，分类列表，标签列表*/
  type BlogListPageData = {
    /** 博客列表 */
    blogListPage: PageRes<Blog[]>,
    /** 分类列表 */
    categoryVo: CategoryVo,
    /** 标签列表 */
    tags: Tag[],
    tag?: string,
    category?: string,
    blog?: string,
    /** 导航面包屑列表 */
    breadcrumbs?: BreadcrumbType[],
    rightNavs?: Nav[],
  }
  /* 前台博客页面数据查询参数 */
  type BlogListPageReq = {
    /** 分类列表,直接选择的 */
    categories?: Category[],
    /** 标签列表 */
    tags?: Tag[]
    /** 输入框中的关键字 */
    category?: string,
    tag?: string,
    blog?: string,
  }
  type BlogViewVo = {
    blog: BlogVo,
    commentPage: number,
    csrfToken: string,
    description: string,
    keywords: string,
    rightNavs: Nav[],
  }


  type MySubMenuType = {
    id: number;
    label: string;
    details?: string;
    url: string;
    icon?: string;
    subMenu?: MySubMenuType[];
  }
  type MyMenuType = {
    id: number;
    label: string;
    url?: string;
    subMenu?: MySubMenuType[];
  }
  type HeaderDataType = {
    logo: string;
    url: string;
    menu: MyMenuType[]
  }
  type Landing = {
    header?: HeaderDataType;
    footer?: FooterDataType;
  };

  type BannerType = {
    id: number;
    name: string,
    backgroundUrl: string,
    title: string,
    content: string,
    button: string,
    href: string
  }

  type HomeData = {
    banner?: BannerType[];
    top3Slogan?: string[];
    honorDisplays?: honorDisplay[];
    experts?: ExpertInfoVo;
    landingBlogs?: LandingBLogs[];
    functionIcons?: FunctionIcon[];
    about?: AboutType;
    keyDeparts?: KeyDepartsVo[];
    news?: LandingNews;
  };
  type Footer = {
    id?: number;
    label?: string;
    details?: string;
    url?: string;
    sort?: number;
    parent?: number;
  };

  type FooterDataType = {
    copyright: string;
    slogan: string;
    logo: string;
    icp: string;
    menu: MyMenuType[]
  }

  type Expert = {
    id?: number;
    name?: string;
    sex?: string;
    job?: string;
    title?: string;
    department?: string;
    resume?: string;
    details?: string;
    img?: string;
    zipImg?: string;
    url?: string;
    sort?: number;
    userType?: string;
  };
  type ExpertPage = {
    experts: experts[];
    rightNavs: Nav[];
  }
  type ExpertDetail = {
    expert: Expert;
    title: string;
  }
  type DeptExpert = {
    dept: string;
    experts: Expert[];
  }

  type ExpertInfoVo = {
    allExperts: Expert[];
    experts: DeptExpert[];
  }
  type KeyDepartsVo = {
    keyName: string;
    departs: Depart[];
  }

  type HonorDisplay = {
    id?: number;
    label?: string;
    details?: string;
    img?: string;
    url?: string;
    sort?: number;
    zipImg?: string;
  };
  type LandingBLogs = {
    tag: string;
    blogs: BlogVo[];
  }
  type LandingNews = {
    coverBlogs: BlogVo[];
    blogs: BlogVo[];
    openBlogs: BlogVo[];
  }

  type FunctionIcon = {
    id?: number;
    icon?: string;
    bg?: string;
    name?: string;
    details?: string;
    url?: string;
    sort?: number;
    msg?: string;
  };
  type BreadcrumbType = {
    id: number;
    url: string;
    icon?: string;
    name: string;
  }
  type AboutType = {
    videoSrc: string;//视频地址（必传）
    poster: string;//	视频封面图
    details: string;//展示的文章
    url: string;//跳转链接
  }

  type Depart = {
    id?: number;
    name?: string;
    details?: string;
    icon?: string;
    bg?: string;
    url?: string;
    sort?: number;
    type?: number;
    attr1?: string;
    attr2?: string;
  };

  type DepartWithExpert = {
    id?: number;
    name?: string;
    details?: string;
    icon?: string;
    bg?: string;
    url?: string;
    sort?: number;
    experts?: Expert[];
  };

  type DepartDetailPageVo = {
    depart: Depart;
    experts?: Expert[]
  }

  type ShowDate = {
    value: string;
    label: string;
    checked: boolean;
  }
  type outSchedule = {
    id?: number;
    visitDate?: string;
    deptName?: string;
    doctorName?: string;
    registerTypeName?: string;
    totalFee?: string;
    atNoon?: string;
    createOn?: string;
  }
  type OutSch = {
    dateList: ShowDate[];
    outScheduleMap: Record<string, Record<string, outSchedule[]>>;
    outScheduleTips: string;
  }
  type OutScheduleReq = {
    isExpert?: boolean;
    selectedDate?: string;
  }

  type ImgShow = {
    id?: number;
    name?: string;
    resume?: string;
    details?: string;
    img?: string;
    zipImg?: string;
    url?: string;
    type?: number;
    sort?: number;

    attr1?: string;
    attr2?: string;
    attr3?: string;

  };
  type ImgShowPage = {
    title: string;
    imgShows: ImgShow[];
    rightNavs: Nav[];
  }
  type HospitalMap = {
    title: string;
    defaultDist: number;
    imgShows: ImgShow[];
  }
}
