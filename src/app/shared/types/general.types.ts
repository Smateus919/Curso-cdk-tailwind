import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface SelectInterface {
    id: number;
    name: string;
    icon?: IconProp;
    status?: boolean;
}