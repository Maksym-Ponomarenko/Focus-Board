import { Metadata } from "next";

export interface IPageProps {
    params: {
        id: string;
    };
}

export function generateMetadata({ params }: IPageProps): Metadata {
    return {
        title: params.id,
    };
}

export default function Page({ params }: IPageProps) {
    return (
        <div>
            Страница задачи: {params.id}
        </div>
    );
}
