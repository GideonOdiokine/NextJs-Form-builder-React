import { CheckboxFieldFormElement } from './fields/CheckboxField';
import { DateFieldFormElement } from './fields/DateField';
import { NumberFieldFormElement } from './fields/NumberField';
import { ParagprahFieldFormElement } from './fields/ParagraphField';
import { SelectFieldFormElement } from './fields/SelectField';
import { SeparatorFieldFormElement } from './fields/SeparatorField';
import { SpacerFieldFormElement } from './fields/SpacerField';
import { SubTitleFieldFormElement } from './fields/SubTitleField';
import { TextAreaFormElement } from './fields/TextAreaField';
import { TextFieldFormElement } from "./fields/TextField";
import { TitleFieldFormElement } from './fields/TitleField';

export const FormElements = {
  TextField: TextFieldFormElement,
  TitleField: TitleFieldFormElement,
  NumberField: NumberFieldFormElement,
  ParagraphField: ParagprahFieldFormElement,
  SelectField: SelectFieldFormElement,
  TextAreaField: TextAreaFormElement,
  SubTitleField: SubTitleFieldFormElement,
  SpacerField: SpacerFieldFormElement,
  SeparatorField: SeparatorFieldFormElement,
  DateField: DateFieldFormElement,
  CheckboxField: CheckboxFieldFormElement,
};
