export interface Movie {
  title: string;
  headline: string;
  rating: string;
  summary: string;
  link: string;
  date: string;
  opening_date: string;
  image: {
    src: string;
    height: number;
    width: number;
  } | null;
}
