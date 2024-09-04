export interface StringMap {
    [key: string]: any;
}
declare namespace ReactQuill {
    type Value = string | DeltaStatic;
    type Range = RangeStatic | null;
    interface QuillOptions extends QuillOptionsStatic {
        tabIndex?: number;
    }
    interface ReactQuillProps {
        bounds?: string | HTMLElement;
        children?: React.ReactElement<any>;
        className?: string;
        defaultValue?: Value;
        formats?: string[];
        id?: string;
        modules?: StringMap;
        onChange?(value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor): void;
        onChangeSelection?(selection: Range, source: Sources, editor: UnprivilegedEditor): void;
        onFocus?(selection: Range, source: Sources, editor: UnprivilegedEditor): void;
        onBlur?(previousSelection: Range, source: Sources, editor: UnprivilegedEditor): void;
        onKeyDown?: React.EventHandler<any>;
        onKeyPress?: React.EventHandler<any>;
        onKeyUp?: React.EventHandler<any>;
        placeholder?: string;
        preserveWhitespace?: boolean;
        readOnly?: boolean;
        scrollingContainer?: string | HTMLElement;
        style?: React.CSSProperties;
        tabIndex?: number;
        theme?: string;
        value?: Value;
    }
    interface UnprivilegedEditor {
        getLength(): number;
        getText(index?: number, length?: number): string;
        getHTML(): string;
        getBounds(index: number, length?: number): BoundsStatic;
        getSelection(focus?: boolean): RangeStatic;
        getContents(index?: number, length?: number): DeltaStatic;
    }
}
interface ReactQuillProps {
    bounds?: string | HTMLElement;
    children?: React.ReactElement<any>;
    className?: string;
    defaultValue?: any;
    formats?: string[];
    id?: string;
    modules?: StringMap;
    onChange?(value: string, delta: DeltaStatic, source: Sources, editor: any): void;
    onChangeSelection?(selection: Range, source: Sources, editor: any): void;
    onFocus?(selection: Range, source: Sources, editor: any): void;
    onBlur?(previousSelection: Range, source: Sources, editor: any): void;
    onKeyDown?: React.EventHandler<any>;
    onKeyPress?: React.EventHandler<any>;
    onKeyUp?: React.EventHandler<any>;
    placeholder?: string;
    preserveWhitespace?: boolean;
    readOnly?: boolean;
    scrollingContainer?: string | HTMLElement;
    style?: React.CSSProperties;
    tabIndex?: number;
    theme?: string;
    value?: any;
}

// Type definitions for Quill 1.3
// Project: https://github.com/quilljs/quill/
// Definitions by: Sumit <https://github.com/sumitkm>
//                 Guillaume <https://github.com/guillaume-ro-fr>
//                 James Garbutt <https://github.com/43081j>
//                 Aniello Falcone <https://github.com/AnielloFalcone>
//                 Mohammad Hossein Amri <https://github.com/mhamri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Blot } from 'parchment/dist/src/blot/abstract/blot';

/**
 * A stricter type definition would be:
 *
 *   type DeltaOperation ({ insert: any } | { delete: number } | { retain: number }) & OptionalAttributes;
 *
 *  But this would break a lot of existing code as it would require manual discrimination of the union types.
 */
export type DeltaOperation = { insert?: any, delete?: number, retain?: number } & OptionalAttributes;
export type Sources = "api" | "user" | "silent";

export interface Key {
    key: string;
    shortKey?: boolean;
}
export interface RangeStatic {
    index: number;
    length: number;
}

interface CustomShadows {
    z1: string;
    z4: string;
    z8: string;
    z12: string;
    z16: string;
    z20: string;
    z24: string;
    //
    primary: string;
    secondary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
    //
    card: string;
    dialog: string;
    dropdown: string;
  }
  

declare module '@mui/material/styles' {
    interface Theme {
      customShadows: CustomShadows;
    }
    interface ThemeOptions {
      customShadows?: CustomShadows;
    }
  }
  
export interface OptionalAttributes {
    attributes?: StringMap;
}

export type TextChangeHandler = (delta: DeltaStatic, oldContents: DeltaStatic, source: Sources) => any;
export type SelectionChangeHandler = (range: RangeStatic, oldRange: RangeStatic, source: Sources) => any;
export type EditorChangeHandler = ((name: "text-change", delta: DeltaStatic, oldContents: DeltaStatic, source: Sources) => any)
    | ((name: "selection-change", range: RangeStatic, oldRange: RangeStatic, source: Sources) => any);

export interface KeyboardStatic {
    addBinding(key: Key, callback: (range: RangeStatic, context: any) => void): void;
    addBinding(key: Key, context: any, callback: (range: RangeStatic, context: any) => void): void;
}

export interface ClipboardStatic {
    convert(html?: string): DeltaStatic;
    addMatcher(selectorOrNodeType: string|number, callback: (node: any, delta: DeltaStatic) => DeltaStatic): void;
    dangerouslyPasteHTML(html: string, source?: Sources): void;
    dangerouslyPasteHTML(index: number, html: string, source?: Sources): void;
}

export interface QuillOptionsStatic {
    debug?: string;
    modules?: StringMap;
    placeholder?: string;
    readOnly?: boolean;
    theme?: string;
    formats?: string[];
    bounds?: HTMLElement | string;
    scrollingContainer?: HTMLElement | string;
    strict?: boolean;
}

export interface BoundsStatic {
    bottom: number;
    left: number;
    right: number;
    top: number;
    height: number;
    width: number;
}

export interface DeltaStatic {
    ops?: DeltaOperation[];
    retain(length: number, attributes?: StringMap): DeltaStatic;
    delete(length: number): DeltaStatic;
    filter(predicate: (op: DeltaOperation) => boolean): DeltaOperation[];
    forEach(predicate: (op: DeltaOperation) => void): void;
    insert(text: any, attributes?: StringMap): DeltaStatic;
    map<T>(predicate: (op: DeltaOperation) => T): T[];
    partition(predicate: (op: DeltaOperation) => boolean): [DeltaOperation[], DeltaOperation[]];
    reduce<T>(predicate: (acc: T, curr: DeltaOperation, idx: number, arr: DeltaOperation[]) => T, initial: T): T;
    chop(): DeltaStatic;
    length(): number;
    slice(start?: number, end?: number): DeltaStatic;
    compose(other: DeltaStatic): DeltaStatic;
    concat(other: DeltaStatic): DeltaStatic;
    diff(other: DeltaStatic, index?: number): DeltaStatic;
    eachLine(predicate: (line: DeltaStatic, attributes: StringMap, idx: number) => any, newline?: string): DeltaStatic;
    transform(index: number, priority?: boolean): number;
    transform(other: DeltaStatic, priority: boolean): DeltaStatic;
    transformPosition(index: number, priority?: boolean): number;
}
