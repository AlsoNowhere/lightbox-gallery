
import { toggleSearch } from "../services/aside/toggle-search.service";
import { selectImages } from "../services/aside/select-images.service";
import { downloadZip } from "../services/aside/download-zip.service";
import { toggleShowFlags } from "../services/aside/toggle-show-flags.service";
import { toggleShowStars } from "../services/aside/toggle-show-stars.service";
import { setUpModal } from "../services/aside/find-similar-images.service";
import { zoomIn, zoomOut } from "../services/aside/zoom.service";

import { AsideItem } from "../models/AsideItem.model";

export const asideOptions = [
    new AsideItem("search", "Search filter by tags", toggleSearch),
    new AsideItem("check-square-o", "Select images", selectImages),
    new AsideItem("file-archive-o", "Download zip", downloadZip, true),
    new AsideItem("flag-o", "Report image", toggleShowFlags),
    new AsideItem("star-o", "Choose favorites", toggleShowStars),
    new AsideItem("exchange", "Similar images", setUpModal, true),
    new AsideItem("search-plus", "Zoom in", zoomIn, true),
    new AsideItem("search-minus", "Zoom out", zoomOut, true),
];
