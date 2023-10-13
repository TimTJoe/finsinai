
[14:50:14.329] src/App.tsx(4,21): error TS2307: Cannot find module '@page/account' or its corresponding type declarations.
[14:50:14.329] src/App.tsx(5,20): error TS2307: Cannot find module '@page/account/Logout' or its corresponding type declarations.
[14:50:14.329] src/App.tsx(6,23): error TS2307: Cannot find module '@page/dashboard' or its corresponding type declarations.
[14:50:14.329] src/App.tsx(7,20): error TS2307: Cannot find module '@page/income' or its corresponding type declarations.
[14:50:14.330] src/App.tsx(8,21): error TS2307: Cannot find module '@page/expense' or its corresponding type declarations.
[14:50:14.330] src/components/animations/Slide.tsx(30,7): error TS2322: Type 'Variant' is not assignable to type 'boolean | MakeCustomValueType<TargetProperties> | VariantLabels | undefined'.
[14:50:14.330]   Type 'TargetAndTransition' is not assignable to type 'boolean | MakeCustomValueType<TargetProperties> | VariantLabels | undefined'.
[14:50:14.330]     Type 'TargetAndTransition' is not assignable to type 'MakeCustomValueType<TargetProperties>'.
[14:50:14.330]       Types of property 'clipPath' are incompatible.
[14:50:14.330]         Type 'string | CustomValueType | (string | CustomValueType | undefined)[] | [null, ...(string | CustomValueType | undefined)[]] | undefined' is not assignable to type 'string | CustomValueType | undefined'.
[14:50:14.330]           Type '(string | CustomValueType | undefined)[]' is not assignable to type 'string | CustomValueType | undefined'.
[14:50:14.330] src/components/animations/Slide.tsx(31,7): error TS2322: Type 'Variant' is not assignable to type 'boolean | TargetAndTransition | VariantLabels | AnimationControls | undefined'.
[14:50:14.331]   Type 'TargetResolver' is not assignable to type 'boolean | TargetAndTransition | VariantLabels | AnimationControls | undefined'.
[14:50:14.331] src/components/cards/summary.card.tsx(5,21): error TS6133: 'green' is declared but its value is never read.
[14:50:14.331] src/components/cards/summary.card.tsx(9,1): error TS6133: 'useIncome' is declared but its value is never read.
[14:50:14.331] src/components/cards/summary.card.tsx(10,1): error TS6133: 'useExpense' is declared but its value is never read.
[14:50:14.331] src/components/cards/summary.card.tsx(11,1): error TS6133: 'useLocation' is declared but its value is never read.
[14:50:14.331] src/components/charts/pie.chart.tsx(72,9): error TS6133: 'getTotalAmount' is declared but its value is never read.
[14:50:14.331] src/components/common/Menu.tsx(4,41): error TS2307: Cannot find module './styled/menu.styled' or its corresponding type declarations.
[14:50:14.331] src/components/common/Menu.tsx(56,29): error TS2339: Property 'url' does not exist on type '{}'.
[14:50:14.331] src/components/common/Menu.tsx(60,50): error TS2339: Property 'label' does not exist on type '{}'.
[14:50:14.332] src/components/common/colors.tsx(16,3): error TS1117: An object literal cannot have multiple properties with the same name.
[14:50:14.332] src/components/common/custom.fab.tsx(1,8): error TS6133: 'React' is declared but its value is never read.
[14:50:14.333] src/components/common/custom.fab.tsx(4,1): error TS6133: 'MenuItem' is declared but its value is never read.
[14:50:14.333] src/components/common/custom.fab.tsx(7,1): error TS6133: 'RemoveIcon' is declared but its value is never read.
[14:50:14.333] src/components/common/custom.fab.tsx(9,1): error TS6133: 'Subline' is declared but its value is never read.
[14:50:14.333] src/components/common/custom.fab.tsx(35,36): error TS7006: Parameter 'event' implicitly has an 'any' type.
[14:50:14.333] src/components/common/custom.layout.tsx(7,25): error TS2307: Cannot find module '@page/expense/expense.form' or its corresponding type declarations.
[14:50:14.333] src/components/common/custom.layout.tsx(8,24): error TS2307: Cannot find module '@page/income/income.form' or its corresponding type declarations.
[14:50:14.333] src/components/common/custom.layout.tsx(39,48): error TS2322: Type 'string' is not assignable to type '"permanent" | "persistent" | "temporary" | undefined'.
[14:50:14.333] src/components/common/custom.snackbar.tsx(1,1): error TS6133: 'React' is declared but its value is never read.
[14:50:14.333] src/components/form/Signin.form.tsx(50,25): error TS6133: 'errors' is declared but its value is never read.
[14:50:14.333] src/components/form/Signin.form.tsx(93,7): error TS2322: Type '{ children: (false | Element)[]; component: "form"; method: string; onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>; }' is not assignable to type 'IntrinsicAttributes & SystemProps<Theme> & { children?: ReactNode; component?: ElementType<any> | undefined; ref?: Ref<...> | undefined; sx?: SxProps<...> | undefined; } & Omit<...> & { ...; } & CommonProps & Omit<...>'.
[14:50:14.334]   Property 'method' does not exist on type 'IntrinsicAttributes & SystemProps<Theme> & { children?: ReactNode; component?: ElementType<any> | undefined; ref?: Ref<...> | undefined; sx?: SxProps<...> | undefined; } & Omit<...> & { ...; } & CommonProps & Omit<...>'.
[14:50:14.334] src/components/form/Signin.form.tsx(110,11): error TS2322: Type 'string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined' is not assignable to type 'ReactNode'.
[14:50:14.334]   Type 'FieldError' is not assignable to type 'ReactNode'.
[14:50:14.334]     Type 'FieldError' is missing the following properties from type 'ReactPortal': key, children, props
[14:50:14.334] src/components/form/Signin.form.tsx(121,11): error TS2322: Type 'string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined' is not assignable to type 'ReactNode'.
[14:50:14.334] src/components/form/Signup.form.tsx(47,25): error TS6133: 'errors' is declared but its value is never read.
[14:50:14.334] src/components/form/Signup.form.tsx(53,29): error TS6133: 'e' is declared but its value is never read.
[14:50:14.334] src/components/form/Signup.form.tsx(67,18): error TS6133: 'data' is declared but its value is never read.
[14:50:14.334] src/components/form/Signup.form.tsx(92,7): error TS2322: Type '{ children: (false | Element)[]; component: "form"; method: string; onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>; }' is not assignable to type 'IntrinsicAttributes & SystemProps<Theme> & { children?: ReactNode; component?: ElementType<any> | undefined; ref?: Ref<...> | undefined; sx?: SxProps<...> | undefined; } & Omit<...> & { ...; } & CommonProps & Omit<...>'.
[14:50:14.334]   Property 'method' does not exist on type 'IntrinsicAttributes & SystemProps<Theme> & { children?: ReactNode; component?: ElementType<any> | undefined; ref?: Ref<...> | undefined; sx?: SxProps<...> | undefined; } & Omit<...> & { ...; } & CommonProps & Omit<...>'.
[14:50:14.334] src/components/form/Signup.form.tsx(109,11): error TS2322: Type 'string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined' is not assignable to type 'ReactNode'.
[14:50:14.334] src/components/form/Signup.form.tsx(120,11): error TS2322: Type 'string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined' is not assignable to type 'ReactNode'.
[14:50:14.335] src/components/form/Signup.form.tsx(131,11): error TS2322: Type 'string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined' is not assignable to type 'ReactNode'.
[14:50:14.335] src/components/form/index.ts(1,15): error TS2307: Cannot find module './Form' or its corresponding type declarations.
[14:50:14.335] src/components/form/index.ts(2,23): error TS2307: Cannot find module './Form' or its corresponding type declarations.
[14:50:14.335] src/components/navigation/Drawer.tsx(29,15): error TS2322: Type '{ children: Element[]; key: number; component: string; href: string; onClick: () => void; }' is not assignable to type 'IntrinsicAttributes & { button?: false | undefined; } & ListItemBaseProps & { components?: { Root?: ElementType<any> | undefined; } | undefined; componentsProps?: { ...; } | undefined; slotProps?: { ...; } | undefined; slots?: { ...; } | undefined; } & CommonProps & Omit<...> & { ...; }'.
[14:50:14.335]   Property 'component' does not exist on type 'IntrinsicAttributes & { button?: false | undefined; } & ListItemBaseProps & { components?: { Root?: ElementType<any> | undefined; } | undefined; componentsProps?: { ...; } | undefined; slotProps?: { ...; } | undefined; slots?: { ...; } | undefined; } & CommonProps & Omit<...> & { ...; }'. Did you mean 'components'?
[14:50:14.335] src/components/navigation/Navigation.tsx(4,3): error TS6133: 'RxBell' is declared but its value is never read.
[14:50:14.335] src/components/navigation/Navigation.tsx(6,3): error TS6133: 'RxMagnifyingGlass' is declared but its value is never read.
[14:50:14.335] src/components/navigation/Navigation.tsx(8,10): error TS6133: 'Avatar' is declared but its value is never read.
[14:50:14.335] src/components/navigation/Navigation.tsx(8,43): error TS6133: 'Link' is declared but its value is never read.
[14:50:14.335] src/components/navigation/Navigation.tsx(12,1): error TS6133: 'MdPeople' is declared but its value is never read.
[14:50:14.335] src/components/navigation/drawer.items.tsx(3,10): error TS6133: 'AiFillPieChart' is declared but its value is never read.
[14:50:14.337] src/components/navigation/drawer.items.tsx(7,3): error TS6133: 'RxTarget' is declared but its value is never read.
[14:50:14.337] src/components/providers/ProvideDB.tsx(1,44): error TS6133: 'useMemo' is declared but its value is never read.
[14:50:14.337] src/components/providers/ProvideForm.tsx(1,37): error TS6133: 'useMemo' is declared but its value is never read.
[14:50:14.337] src/components/providers/ProvideSnackbar.tsx(4,1): error TS6133: 'MdClose' is declared but its value is never read.
[14:50:14.337] src/components/providers/ProvideUser.tsx(10,1): error TS6133: 'lodash' is declared but its value is never read.
[14:50:14.337] src/components/search/Search.tsx(5,3): error TS6133: 'SearchDialog' is declared but its value is never read.
[14:50:14.337] src/components/search/Search.tsx(23,12): error TS6133: 'handleChange' is declared but its value is never read.
[14:50:14.337] src/components/search/Search.tsx(23,25): error TS7006: Parameter 'e' implicitly has an 'any' type.
[14:50:14.337] src/components/search/Search.tsx(50,25): error TS2322: Type '{ children: string; component: string; href: string; color: "primary"; }' is not assignable to type 'IntrinsicAttributes & SystemProps<Theme> & { align?: "center" | "left" | "right" | "inherit" | "justify" | undefined; children?: ReactNode; ... 6 more ...; variantMapping?: Partial<...> | undefined; } & CommonProps & Omit<...> & { ...; }'.
[14:50:14.337]   Property 'component' does not exist on type 'IntrinsicAttributes & SystemProps<Theme> & { align?: "center" | "left" | "right" | "inherit" | "justify" | undefined; children?: ReactNode; ... 6 more ...; variantMapping?: Partial<...> | undefined; } & CommonProps & Omit<...> & { ...; }'.
[14:50:14.337] src/components/styled/common.styled.tsx(3,1): error TS6133: 'blueGrey' is declared but its value is never read.
[14:50:14.337] src/components/styled/drawer.styled.tsx(10,10): error TS6133: 'blue' is declared but its value is never read.
[14:50:14.337] src/components/utils/helpers/handleShowPassword.ts(1,10): error TS6133: 'useEffect' is declared but its value is never read.
[14:50:14.337] src/pages/account/components/settings.comp.tsx(1,17): error TS6133: 'useContext' is declared but its value is never read.
[14:50:14.337] src/pages/account/components/settings.comp.tsx(28,22): error TS2339: Property 'click' does not exist on type 'string'.
[14:50:14.337] src/pages/account/components/settings.comp.tsx(44,13): error TS2322: Type 'MutableRefObject<string>' is not assignable to type 'LegacyRef<HTMLInputElement> | undefined'.
[14:50:14.337]   Type 'MutableRefObject<string>' is not assignable to type 'RefObject<HTMLInputElement>'.
[14:50:14.337]     Types of property 'current' are incompatible.
[14:50:14.337]       Type 'string' is not assignable to type 'HTMLInputElement'.
[14:50:14.337] src/pages/dashboard/Dashboard.tsx(34,31): error TS6133: 'event' is declared but its value is never read.
[14:50:14.338] src/pages/dashboard/Dashboard.tsx(34,31): error TS7006: Parameter 'event' implicitly has an 'any' type.
[14:50:14.338] src/pages/dashboard/Dashboard.tsx(34,38): error TS7006: Parameter 'newOption' implicitly has an 'any' type.
[14:50:14.338] src/pages/expense/expense.form.tsx(28,5): error TS6133: 'setError' is declared but its value is never read.
[14:50:14.338] src/pages/expense/expense.form.tsx(48,14): error TS6133: 'data' is declared but its value is never read.
[14:50:14.338] src/pages/expense/expense.form.tsx(74,11): error TS2322: Type 'string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined' is not assignable to type 'ReactNode'.
[14:50:14.338] src/pages/expense/expense.form.tsx(88,13): error TS2322: Type 'string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined' is not assignable to type 'ReactNode'.
[14:50:14.338] src/pages/expense/expense.form.tsx(101,13): error TS2322: Type 'string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined' is not assignable to type 'ReactNode'.
[14:50:14.338] src/pages/income/income.form.tsx(1,10): error TS6133: 'useCallback' is declared but its value is never read.
[14:50:14.338] src/pages/income/income.form.tsx(1,23): error TS6133: 'useEffect' is declared but its value is never read.
[14:50:14.338] src/pages/income/income.form.tsx(29,5): error TS6133: 'setError' is declared but its value is never read.
[14:50:14.338] src/pages/income/income.form.tsx(47,14): error TS6133: 'data' is declared but its value is never read.
[14:50:14.338] src/pages/income/income.form.tsx(73,11): error TS2322: Type 'string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined' is not assignable to type 'ReactNode'.
[14:50:14.338] src/pages/income/income.form.tsx(87,13): error TS2322: Type 'string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined' is not assignable to type 'ReactNode'.
[14:50:14.338] src/pages/income/income.form.tsx(100,13): error TS2322: Type 'string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined' is not assignable to type 'ReactNode'.
[14:50:14.365] Error: Command "npm run build" exited with 2