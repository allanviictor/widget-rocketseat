import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export function CloseButton() {
    return (
        <Popover.Button className=" p-3 absolute top-[6px] right-2 text-zinc-400">
            <X size={25} />
        </Popover.Button>
    );
}
