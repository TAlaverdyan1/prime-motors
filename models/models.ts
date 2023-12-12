
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