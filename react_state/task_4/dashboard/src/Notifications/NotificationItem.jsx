import React, { PureComponent } from 'react';

class NotificationItem extends PureComponent {
    render() {
        const { type = 'default', value, html, markAsRead, id } = this.props;

        // Render value or HTML content
        const content = html ? (
            <span dangerouslySetInnerHTML={html} />
        ) : (
            value
        );

        return (
            <li
                style={{ color: type === 'default' ? 'blue' : 'red' }}
                data-notification-type={type}
                onClick={() => markAsRead?.(id)}
            >
                {content}
            </li>
        );
    }
}

export default NotificationItem;
