import { atom, selector } from 'recoil'

export const countAtom = atom({
    key: "countAtom",    //uniquely identifies the atom
    default: 0  //default valur
})

export const evenSelector = selector({
    key: "evenSelector",
    get: ({ get }) => {
        const count = get(countAtom);
        return count % 2;
    }
})