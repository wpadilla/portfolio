import clsx from 'clsx';
import * as React from 'react';
import {
    SiAngular,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiNodedotjs, SiVuedotjs,
} from 'react-icons/si';

import CustomLink from '@/components/links/CustomLink';
import Tooltip from '@/components/Tooltip';

export default function TechStack() {
    return (
        <div className='flex space-x-2 md:space-x-4'>
            {stacks.map((tech) => (
                <Tooltip key={tech.id} tipChildren={<p>{tech.tooltip}</p>}>
                    <tech.icon
                        key={tech.id}
                        className={clsx(
                            'h-8 w-8 md:h-10 md:w-10',
                            'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
                            'transition-colors'
                        )}
                    />
                </Tooltip>
            ))}
        </div>
    );
}

const stacks = [
    {
        id: 'nodejs',
        icon: SiNodedotjs,
    },
    {
        id: 'react',
        icon: SiReact,
        tooltip: (
            <>
                <CustomLink href='https://nextjs.org'>Next.js</CustomLink>, currently my
                go-to framework because of the static generation, dynamic paths, and
                built-in API. <em>ps: I like pages folder better than the new one.</em>
            </>
        ),
    },
    {
        id: 'nextjs',
        icon: SiNextdotjs,
        tooltip: (
            <>
                <CustomLink href='https://nextjs.org'>Next.js</CustomLink>, currently my
                go-to framework because of the static generation, dynamic paths, and
                built-in API. <em>ps: I like pages folder better than the new one.</em>
            </>
        ),
    },
    {
        id: 'angular',
        icon: SiAngular,
    },
    {
        id: 'vuejs',
        icon: SiVuedotjs,
    },
    {
        id: 'typescript',
        icon: SiTypescript,
        tooltip: (
            <>
                <CustomLink href='https://www.typescriptlang.org/'>
                    TypeScript
                </CustomLink>
                , can't live without it! using Next.js, Tailwind CSS, and TypeScript.
            </>
        ),
    },
    {
        id: 'tailwind',
        icon: SiTailwindcss,
        tooltip: (
            <>
                <CustomLink href='https://tailwindcss.com/'>Tailwind CSS</CustomLink> is
                awesome, I have never achieved this much reusability. Make sure you get
                the{' '}
                <CustomLink href='https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss'>
                    extension
                </CustomLink>
                .
            </>
        ),
    },
];
