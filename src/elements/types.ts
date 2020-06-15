import { AProps } from "./A";
import { AbbrProps } from "./Abbr";
import { AddressProps } from "./Address";
import { ArticleProps } from "./Article";
import { AsideProps } from "./Aside";
import { BProps } from "./B";
import { BrProps } from "./Br";
import { ButtonProps } from "./Button";
import { CircleProps } from "./Circle";
import { CiteProps } from "./Cite";
import { CodeProps } from "./Code";
import { DataProps } from "./Data";
import { DdProps } from "./Dd";
import { DetailsProps } from "./Details";
import { DivProps } from "./Div";
import { DlProps } from "./Dl";
import { DtProps } from "./Dt";
import { EmProps } from "./Em";
import { FieldsetProps } from "./Fieldset";
import { FooterProps } from "./Footer";
import { FormProps } from "./Form";
import { H1PRops } from "./H1";
import { H2Props } from "./H2";
import { H3Props } from "./H3";
import { H4Props } from "./H4";
import { H5Props } from "./H5";
import { H6Props } from "./H6";
import { HeaderProps } from "./Header";
import { HrProps } from "./Hr";
import { IProps } from "./I";
import { ImgProps } from "./Img";
import { InputProps } from "./Input";
import { InputCheckboxProps } from "./InputCheckbox";
import { InputEmailProps } from "./InputEmail";
import { InputFileProps } from "./InputFile";
import { InputNumberProps } from "./InputNumber";
import { InputPasswordProps } from "./InputPassword";
import { InputRadioProps } from "./InputRadio";
import { InputSearchProps } from "./InputSearch";
import { InputSubmitProps } from "./InputSubmit";
import { InputTelephoneProps } from "./InputTelephone";
import { InputTextProps } from "./InputText";
import { InputUrlProps } from "./InputUrl";
import { KbdProps } from "./Kbd";
import { LabelProps } from "./Label";
import { LegendProps } from "./Legend";
import { LiProps } from "./Li";
import { MainProps } from "./Main";
import { NavProps } from "./Nav";
import { OlProps } from "./Ol";
import { PProps } from "./P";
import { PathProps } from "./Path";
import { PreProps } from "./Pre";
import { ProgressProps } from "./Progress";
import { QProps } from "./Q";
import { RectProps } from "./Rect";
import { SProps } from "./S";
import { SampProps } from "./Samp";
import { SectionProps } from "./Section";
import { SelectProps } from "./Select";
import { SmallProps } from "./Small";
import { SpanProps } from "./Span";
import { StrongProps } from "./Strong";
import { SubProps } from "./Sub";
import { SummaryProps } from "./Summary";
import { SupProps } from "./Sup";
import { SvgProps } from "./Svg";
import { TableProps } from "./Table";
import { TbodyProps } from "./Tbody";
import { TdProps } from "./Td";
import { TextareaProps } from "./Textarea";
import { TfootProps } from "./Tfoot";
import { ThProps } from "./Th";
import { TheadProps } from "./Thead";
import { TimeProps } from "./Time";
import { TrProps } from "./Tr";
import { UProps } from "./U";
import { UlProps } from "./Ul";
import { VarProps } from "./Var";

// Shorthand Props
import { StylesProps, SpaceProps, ColorProps, ResponsiveValue } from "styled-system";

export declare type ElementProps =
  | AProps
  | AbbrProps
  | AddressProps
  | ArticleProps
  | AsideProps
  | BProps
  | BrProps
  | ButtonProps
  | CircleProps
  | CiteProps
  | CodeProps
  | DataProps
  | DdProps
  | DetailsProps
  | DivProps
  | DlProps
  | DtProps
  | EmProps
  | FieldsetProps
  | FooterProps
  | FormProps
  | H1PRops
  | H2Props
  | H3Props
  | H4Props
  | H5Props
  | H6Props
  | HeaderProps
  | HrProps
  | IProps
  | ImgProps
  | InputProps
  | InputCheckboxProps
  | InputEmailProps
  | InputFileProps
  | InputNumberProps
  | InputPasswordProps
  | InputRadioProps
  | InputSearchProps
  | InputSubmitProps
  | InputTelephoneProps
  | InputTextProps
  | InputUrlProps
  | KbdProps
  | LabelProps
  | LegendProps
  | LiProps
  | MainProps
  | NavProps
  | OlProps
  | PProps
  | PathProps
  | PreProps
  | ProgressProps
  | QProps
  | RectProps
  | SProps
  | SampProps
  | SectionProps
  | SelectProps
  | SmallProps
  | SpanProps
  | StrongProps
  | SubProps
  | SummaryProps
  | SupProps
  | SvgProps
  | TableProps
  | TbodyProps
  | TdProps
  | TextareaProps
  | TfootProps
  | ThProps
  | TheadProps
  | TimeProps
  | TrProps
  | UProps
  | UlProps
  | VarProps;

export type IntrinsicTachyonsAttributes = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in keyof StylesProps]?: Pick<StylesProps, key> | SpaceProps | ColorProps | ResponsiveValue<any>;
};
