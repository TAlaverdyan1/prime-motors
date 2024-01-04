
export type NavbarItem = {
    id: number;
    title: string;
    route: string;
    subtitles?: NavbarItem[];
};

export type NavbarData = {
    en: NavbarItem[];
    ru: NavbarItem[];
    am: NavbarItem[];
};


export type FooterItem = {
    id: number;
    title: string;
};

export type FooterData = {
    en: FooterItem[];
    ru: FooterItem[];
    am: FooterItem[];
};

export type SocialLinkItem = {
    id: number;
    route: string;
};

export type SocialLinkData = {
    facebook: SocialLinkItem[];
    instagram: SocialLinkItem[];
};


export type SliderItem = {
    id: number;
    title: string;
    btn_text: string;
    image: string;
    route: string;
};

export type SliderData = {
    en: SliderItem[];
    ru: SliderItem[];
    am: SliderItem[];
};


export type InfoSectionContent = {
    id: number;
    image: string;
    description: string;
};

export type InfoSectionItem = {
    title: string;
    btn_text: string;
    content: InfoSectionContent[];
};


export type HomepageInfoSection = {
    en: InfoSectionItem;
    ru: InfoSectionItem;
    am: InfoSectionItem;
};

export type AboutUsSectionContent = {
    id: number;
    image: string;
    description: string;
};

export type AboutUsSectionItem = {
    title: string;
    content: AboutUsSectionContent[];
};


export type AboutUsInfoSection = {
    en: AboutUsSectionItem;
    ru: AboutUsSectionItem;
    am: AboutUsSectionItem;
};


export type OurMissionSectionContent = {
    id: number;
    image: string;
    description: string;
};

export type OurMissionSectionItem = {
    title: string;
    content: OurMissionSectionContent[];
};


export type OurMissionInfoSection = {
    en: OurMissionSectionItem;
    ru: OurMissionSectionItem;
    am: OurMissionSectionItem;
};


export type ServicesSectionContent = {
    id: number;
    subtitle: string;
    image: string;
    description: string;
};

export type ServicesSectionItem = {
    title: string;
    content: ServicesSectionContent[];
};


export type ServicesInfoSection = {
    en: ServicesSectionItem;
    ru: ServicesSectionItem;
    am: ServicesSectionItem;
};


export type PartnersSectionContent = {
    id: number;
    subtitle: string;
    image: string;
    link: string;
    btn_text: string;
    description: string;
};

export type PartnersSectionItem = {
    title: string;
    content: PartnersSectionContent[];
};

export type PartnersInfoSection = {
    en: PartnersSectionItem;
    ru: PartnersSectionItem;
    am: PartnersSectionItem;
};


export type BranchesSectionContent = {
    id: number;
    subtitle: string;
    image: string;
    description: string;
};

export type BranchesSectionItem = {
    title: string;
    content: BranchesSectionContent[];
};


export type BranchesInfoSection = {
    en: BranchesSectionItem;
    ru: BranchesSectionItem;
    am: BranchesSectionItem;
};


export type BlogsSectionContent = {
    id: number;
    subtitle: string;
    image: string;
    date: string;
    description: string;
};

export type BlogSectionItem = {
    title: string;
    content: BlogsSectionContent[];
};


export type BlogInfoSection = {
    en: BlogSectionItem;
    ru: BlogSectionItem;
    am: BlogSectionItem;
};


export type PromotionSectionContent = {
    id: number;
    subtitle: string;
    image: string;
    description: string;
};

export type PromotionSectionItem = {
    title: string;
    content: PromotionSectionContent[];
};


export type PromotionInfoSection = {
    en: PromotionSectionItem;
    ru: PromotionSectionItem;
    am: PromotionSectionItem;
};


export type ContactUsSectionContent = {
    id: number;
    name: string;
    email: string;
    message: string;
    btn_text: string;
    message_dispatch: string;
    successMsg: string;
    errorMsg: string;
};

export type ContactUsSectionItem = {
    title: string;
    content: ContactUsSectionContent[];
};


export type ContactUsInfoSection = {
    en: ContactUsSectionItem;
    ru: ContactUsSectionItem;
    am: ContactUsSectionItem;
};

