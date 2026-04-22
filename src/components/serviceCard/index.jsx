import React from "react";
import {
    FiAlertTriangle,
    FiDroplet,
    FiGitMerge,
    FiRefreshCw,
    FiSearch,
    FiThermometer,
    FiTool,
    FiZap,
} from "react-icons/fi";
import { Styled } from "./styled";

const iconMap = {
    FiDroplet: FiDroplet,
    FiRefreshCw: FiRefreshCw,
    FiThermometer: FiThermometer,
    FiSearch: FiSearch,
    FiZap: FiZap,
    FiGitMerge: FiGitMerge,
    FiAlertTriangle: FiAlertTriangle,
    FiTool: FiTool,
};

const statusLabelMap = {
    available: "Available",
    limited: "Limited",
    unavailable: "Unavailable",
};

const statusClassMap = {
    available: "availableBadge",
    limited: "limitedBadge",
    unavailable: "unavailableBadge",
};

const ServiceCard = ({ service, index = 0 }) => {
    const Icon = iconMap[service.iconName] || FiTool;
    const statusLabel = statusLabelMap[service.status] || "Unavailable";
    const statusClassName =
        statusClassMap[service.status] || "unavailableBadge";

    return (
        <Styled.Wrapper data-aos="fade-up" data-aos-delay={(index % 4) * 100}>
            <Styled.Card className="glassCard">
                <Styled.IconWrap>
                    <Icon />
                </Styled.IconWrap>

                <Styled.Top>
                    <Styled.Title>{service.title}</Styled.Title>
                    <span className={`statusBadge ${statusClassName}`}>
                        {statusLabel}
                    </span>
                </Styled.Top>

                <Styled.Description>{service.description}</Styled.Description>

                <Styled.NoteWrap>
                    <Styled.NoteLabel>Service Note</Styled.NoteLabel>
                    <Styled.Note>
                        {service.note || "No additional note available."}
                    </Styled.Note>
                </Styled.NoteWrap>
            </Styled.Card>
        </Styled.Wrapper>
    );
};

export default ServiceCard;
