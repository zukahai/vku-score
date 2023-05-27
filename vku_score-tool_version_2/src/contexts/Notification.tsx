import { notification } from 'antd';
import { IconType } from 'antd/es/notification/interface';
import React, { FunctionComponent } from 'react';

interface NotificationContextProps {
    message: string | null | undefined;
    openNotification: (message: string, type?: IconType) => void;
}

const initialState: NotificationContextProps = {
    message: null,
    openNotification: () => {
        // do nothing
    },
};

const NotificationContext = React.createContext(initialState);

type NotificationProviderProps = {
    children: React.ReactNode;
};

export const NotificationProvider: FunctionComponent<NotificationProviderProps> = ({ children }) => {
    const [api, contextHolder] = notification.useNotification();
    const [message, setMessage] = React.useState<string | null | undefined>(null);
    const openNotification = (message: string, type?: IconType) => {
        setMessage(message);
        api.info({
            message: message,
            placement: 'topRight',
            type: type || 'info',
        });
    };

    return (
        <NotificationContext.Provider value={{ message, openNotification }}>
            <>
                {contextHolder}
                {children}
            </>
        </NotificationContext.Provider>
    );
};

export const useNotification = () => React.useContext(NotificationContext);
