
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
    en: NavbarItem[];
    ru: NavbarItem[];
    am: NavbarItem[];
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


export type InfoSectionItem = {
    id: number;
    image: string;
    description: string;
}

export type InfoSection = {
    title: string;
    btn_text: string;
    content: InfoSectionItem[];
}


export type HomepageInfoSection = {
    en: InfoSection;
    ru: InfoSection;
    am: InfoSection;
};

export type AboutUsSectionItem = {
    id: number;
    image: string;
    description: string;
}

export type AboutUsSection = {
    title: string;
    content: InfoSectionItem[];
}


export type AboutUsInfoSection = {
    en: AboutUsSection;
    ru: AboutUsSection;
    am: AboutUsSection;
};



export type OurMissionSectionItem = {
    id: number;
    image: string;
    description: string;
}

export type OurMissionSection = {
    title: string;
    content: OurMissionSectionItem[];
}


export type OurMissionInfoSection = {
    en: OurMissionSection;
    ru: OurMissionSection;
    am: OurMissionSection;
};


export type ServicesSectionItem = {
    id: number;
    subtitle: string;
    image: string;
    description: string;
}

export type ServicesSection = {
    title: string;
    content: InfoSectionItem[];
}


export type ServicesInfoSection = {
    en: ServicesSection;
    ru: ServicesSection;
    am: ServicesSection;
};


export type PartnersSectionItem = {
    id: number;
    subtitle: string;
    image: string;
    link: string;
    btn_text: string;
    description: string;
}

export type PartnersSection = {
    title: string;
    content: PartnersSectionItem[];
}


export type PartnersInfoSection = {
    en: PartnersSection;
    ru: PartnersSection;
    am: PartnersSection;
};



export type BranchesSectionItem = {
    id: number;
    subtitle: string;
    image: string;
    description: string;
}

export type BranchesSection = {
    title: string;
    content: PartnersSectionItem[];
}


export type BranchesInfoSection = {
    en: BranchesSection;
    ru: BranchesSection;
    am: BranchesSection;
};


export type BlogsSectionItem = {
    id: number;
    subtitle: string;
    image: string;
    date: string;
    description: string;
}

export type BlogSection = {
    title: string;
    content: PartnersSectionItem[];
}


export type BlogInfoSection = {
    en: BlogSection;
    ru: BlogSection;
    am: BlogSection;
};


export type PromotionSectionItem = {
    id: number;
    subtitle: string;
    image: string;
    description: string;
}

export type PromotionSection = {
    title: string;
    content: PromotionSectionItem[];
}


export type PromotionInfoSection = {
    en: PromotionSection;
    ru: PromotionSection;
    am: PromotionSection;
};


export type ContactUsSectionItem = {
    id: number;
    name: string;
    email: string;
    message: string;
    btn_text: string;
    message_dispatch: string;
    successMsg: string;
    errorMsg: string;
}

export type ContactUsSection = {
    title: string;
    content: ContactUsSectionItem[];
}


export type ContactUsInfoSection = {
    en: ContactUsSection;
    ru: ContactUsSection;
    am: ContactUsSection;
};