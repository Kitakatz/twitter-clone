
export interface FooterProps {
    tweet: string;
    onChangeFileHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClickFileHandler: () => void;
    onClickGifHandler: () => void;
    onSubmitHandler: () => void; 
  };