export const getLanguageName = (abbreviation: string) => {
  switch (abbreviation) {
    case "de":
      return "Deutsch";
    case "en":
      return "English";
    case "es":
      return "Español";
    case "fi":
      return "Suomea";
    case "fr":
      return "Français";
    case "it":
      return "Italiano";
    case "ko":
      return "한국어";
    case "ja":
      return "日本語";
    case "sk":
      return "Slovenčina";
    default:
      return "Unknown";
  }
};

export enum LanguageEnum {
  de = "Deutsch",
  en = "English",
  es = "Español",
  fi = "Suomea",
  fr = "Français",
  it = "Italiano",
  Unknown = "Unknown",
}
