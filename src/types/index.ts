export type Language = 'en' | 'ru' | 'uz';

export type ContentType = 'case-studies' | 'architecture' | 'articles';

export interface PinnedCopy {
  title: string;
  description: string;
  /** Short line under the card: years or "Personal project" */
  meta: string;
  /** Label for the card's link, when the card has one */
  linkLabel?: string;
}

export interface TimelineCopy {
  title: string;
  /** Rendered after the title in a lighter weight, e.g. "at Equate Media" */
  org?: string;
  meta: string;
}

export interface Translation {
  nav: {
    work: string;
    writing: string;
    experience: string;
  };
  home: {
    byline: string;
    location: string;
    headline: string;
    intro: string;
    certification: string;
    sections: {
      pinned: string;
      writing: string;
      experience: string;
      education: string;
      contact: string;
    };
    badges: {
      private: string;
      caseStudy: string;
    };
    /** Same order as `pinned` in src/data/profile.ts */
    pinned: PinnedCopy[];
    writing: {
      all: string;
      types: Record<ContentType, string>;
    };
    /** Same order as `experience` in src/data/profile.ts */
    experience: TimelineCopy[];
    education: TimelineCopy[];
  };
  footer: {
    copyright: string;
  };
}
