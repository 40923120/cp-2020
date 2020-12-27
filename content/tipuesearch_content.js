var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'HW1', 'text': '', 'tags': '', 'url': 'HW1.html'}, {'title': 'PCH5', 'text': '', 'tags': '', 'url': 'PCH5.html'}, {'title': '主板和組件', 'text': '\n \xa0 \xa0 \xa0 在本課程中，我們將介紹主板的用途和功能。我們還將介紹中央處理器（CPU）和為CPU提供專門功能的各種技術，例如虛擬化，超線程和多核處理器。最後，我們將介紹可用的各種CPU冷卻方法，例如主動和被動散熱器以及液體冷卻。 \n \xa0 \xa0 \xa0 主板是計算機的基礎。主板就像一個街區，公交車就像街道。這些組件就像城市中的建築物，因此，如果您要從一棟建築物轉到另一棟建築物（或者在我們的情況下，如果我們希望信息從一個組件流向另一組件），則它必須穿越公交車（街道） ）。總線是物理上將主板的各個組件彼此連接的總線，允許信息流入和流出各個計算機組件。主板有各種形狀，大小和佈局。主板的特定形狀，大小和佈局稱為其外形尺寸。主板是最重要的計算機組件之一，因為所有其他組件都可以插入主板，無論是插入專用插槽（例如CPU），擴展槽（用於各種擴展卡）還是連接器（例如SATA）存儲設備和音頻輸入/輸出）。主板確實是計算機中所有組件的主要集合點。 \n \xa0 \xa0 \xa0 擴展插槽可提供計算機系統的其他功能。擴展卡已插入擴展槽。主板上有許多不同類型的擴展插槽。這些類型的插槽中的每一種的功能將在以後的模塊中進行更詳細的討論。以下是最常見的擴展插槽類型的簡要概 述。 \n PCI —傳統的外圍組件互連插槽，通常使用其縮寫詞來指代。 PCI-X — PCI插槽的更快的64位版本，以133 MHz的總線速度運行。 AGP —專用於獨立於共享PCI總線的圖形通道（總線）。這使得3D遊戲設計，硬件加速和視頻播放方面有了進步。 PCIe — PCI Express的速度超過了AGP的速度，並且PCIe為所有設備提供了單個插槽類型。 AMR —音頻調製解調器轉接卡是一種特殊類型的卡，用於將其他卡裝入緊湊的空間。 CNR —通信網絡轉接卡取代了AMR，並在轉接卡上支持六通道數字音頻，網絡功能和其他高質量的集成音頻支持。 \n 芯片組 \xa0 \xa0 \xa0 芯片組確定係統可以使用的CPU，系統提供的集成端口以及主板中包含的擴展插槽的類型。主板的尺寸決定了具體的尺寸，形狀和佈局，而芯片組則決定了將哪些技術集成到主板本身中。每個芯片組都定義了內存控制器，並指定了主板可以使用哪種RAM。這包括要使用的RAM的類型（DDR，DDR2，DDR3等）和RAM的速度（10600、1333 MHz等）。主板在技術上分為“北橋”和“南橋”，將在下一部分中進一步討論。該芯片組由製造商設計，如果不更換整個主板，最終用戶將無法升級或更改。因此，在購買滿足您需求的主板和芯片組之前，請務必謹慎選擇。 \n \n \n \xa0 \xa0 \xa0 在開始討論主板本身之前，我們希望對可以連接到主板的各種組件有基本的了解。 在以後的課程中，我們將詳細介紹這些組件中的每一個，但讓我們看一下主板上的一些關鍵組件。 \n \n \xa0 \xa0 \xa0 查看上面的主板圖，其中標識了特定的組件。 讓我們更仔細地檢查每個組件： \n \n \n \n 組件名稱 \n 功能 \n \n \n PCI擴充插槽 \n 這些使我們能夠為計算機添加功能，例如額外的USB端口，新的聲卡，調製解調器或網卡等。 這是一個通用卡插槽，所有製造商都可以在使用通用規範構建卡時使用。 \n \n \n PCIe x1（PCI Express大小1）插槽 \n 該特定的主板具有三個插槽，但是根據其特定的形狀因板而異。 這些是較新的插槽，比舊的PCI插槽快得多。 PCIe代表PCI Express，x1表示存在一個專用的串行數據連接（通道）。 PCIe具有多種尺寸，例如x1，x4，x8和x16。 \n \n \n PCIe x16（PCI Express尺寸16）插槽 \n 這些是較新的插槽，比舊的PCI插槽快得多。 PCIe代表PCI Express，x16表示有16個串行通道。 PCIe具有多種尺寸，例如x1，x4，x8和x16。 \n \n \n 後置輸入/輸出集群 \n 每個主板都可以提供專用的集成功能，例如網卡，聲卡，視頻卡以及各種輸入/輸出端口，這些功能都“聚集”在板上。 這些組件已焊接到主板上，因此無法更改。 \n \n \n CPU插槽 \n CPU插槽是插入中央處理器（計算機的大腦）的位置。 \n \n \n 內存插槽 \n 這些插槽是在其中插入額外的隨機存取存儲器（RAM）以便為計算機提供容量的位置。 \n \n \n 24針主電源連接器 \n 這個24針主電源連接器為整個主板供電。 \n \n \n \n \n', 'tags': '', 'url': '主板和組件.html'}, {'title': '擴展插槽', 'text': '\n 北橋 北橋有幾個名字。第一個也是最常見的是內存控制器中樞（MCH），但也可以稱為Intel主板上具有集成顯卡的圖形內存控制器中樞（GMCH）。北橋用作CPU和內存庫（RAM），PCIe x16，AGP圖形擴展插槽以及其他高速組件之間的連接。從本質上講，CPU的運行速度非常快（例如3 GHz或更高的速度），並且計算機周圍的各種組件無法以如此快的速度運行。北橋充當緩衝區，以保持高速設備向CPU提供信息。雖然內存可以在1至2 GHz範圍內運行，但它與CPU之間仍然存在延遲。北橋合併所有高速輸入，以最大程度地提高CPU的效率。 \n 南橋 南橋被稱為輸入/輸出控制器集線器（ICH）。南橋用作CPU和計算機低速組件之間的連接。例如，與CPU相比，硬盤以非常慢的速度運行，但是來自用戶（來自鍵盤和鼠標）的輸入發生的速度甚至比硬盤慢。 ICH整合了來自大容量存儲設備，DVD / CD驅動器，硬盤驅動器，軟盤驅動器，USB端口，PCI擴展插槽，CMOS和端口群集的輸入/輸出的輸入，然後將該信息從南橋傳遞到北橋，然後到CPU進行處理。通過消除對南橋上較慢的組件的等待時間，並使CPU在空閒週期內處理其他數據，此過程可最大程度地提高CPU處理數據的能力的效率。 \n \n \n \n', 'tags': '', 'url': '擴展插槽.html'}, {'title': '跳線(飛線)', 'text': '\xa0 \xa0 \xa0 主板還包含用於為計算機系統提供其他配置選項的引腳。 這些針腳可以用跨接器設備覆蓋，該跳線器是具有金屬內部的塑料件，在一組針腳之間建立電連接。 跳線允許在主板上啟用或禁用特定功能。 \n \n \n 風扇連結器 \n \n \n \xa0 \xa0 \xa0 每個主板都有幾個風扇連接器，特別是CPU風扇和機箱風扇。   這些連接器從主板為風扇供電（最終從電源到主板的主電源連接器，再向風扇本身供電）。   一些較新的主板可以提供PC運行狀況，例如風扇速度，風扇功率，板溫度和其他統計信息。   大多數機箱風扇連接器只有三個引腳，但是CPU風扇連接器可以具有四個引腳，其中一個引腳專用於速度控制。   然後，可以根據CPU和主板的溫度來增加或減少風扇速度。   隨著溫度的升高，將發送信號以提高速度控制，從而降低CPU和主板的溫度。 \n \n \n \n \n \n \n \n', 'tags': '', 'url': '跳線(飛線).html'}, {'title': '音頻連接器', 'text': '\xa0 \xa0 \xa0 主板還包含音頻設備的接口，例如輔助輸入或CD播放。 某些機箱的正面配有耳機和麥克風的音頻插孔； 這些功能需要從機箱正面到主板上的音頻連接器的電纜。 主板上的另一個連接器可能是Sony / Philips數字交換格式（SPDIF），該連接器從主板連接到光學SPDIF連接，稱為接頭。 這些各種音頻連接器在主板上看起來相同，通常僅通過主板上端口的標記來區分。 它們通常位於主板的邊緣之一上。 \n \n \n 前面板連接器 \n \xa0 \xa0 \xa0 下圖顯示了前面板連接器以及各種彩色電纜。 通過連接器，母板可以從電源開關，電源LED指示燈，硬盤驅動器活動指示燈，重置按鈕和機箱揚聲器（如果已安裝）發送/接收信息。 連接器通常分組在主板的前邊緣，並且往往很小且難以安裝。 通常，技術人員將不得不使用鑷子將其連接到插頭。 在計算機內進行其他工作時，很容易意外拔下這些連接器，因此，最好在更換護蓋之前重新檢查這些連接。 例如，如果計算機無法打開電源，則可能不是電源問題，可能僅僅是“電源開關”前面板連接器已拔出。 如果電源開關未完全插入主板，則計算機將無法打開。 \n \n \n \n', 'tags': '', 'url': '音頻連接器.html'}, {'title': '處理器歷史', 'text': '\xa0 \xa0 \xa0 第一批微處理器於1970年代製造。這些微處理器基於NMOS（n型金屬氧化物半導體）邏輯和晶體管構建。早期，四位處理器（例如Intel 4004）很常見。英特爾4004具有2300個晶體管。它每秒執行60,000次操作，尋址640字節的內存，並以740 kHz的速度運行。英特爾4004的價格約為200美元。十年後，諸如摩托羅拉6502之類的八位處理器取代了四位芯片。摩托羅拉6502是8毫米製程技術芯片，面積為4毫米見方。到1970年代末，出現了16位處理器。 \n \xa0 \xa0 \xa0 在1980年代，新設計中普遍使用16位和32位微處理器，並且CMOS（互補金屬氧化物半導體）技術取代了NMOS。在過去的十年中，晶體管的數量急劇增加。 1980年代的家用計算機主要使用1970年代引入的處理器。 1975年首次發布的Motorola 6502和Zilog Z80（1976）的版本是許多家用計算機的核心，例如Commodore 64和ZX Spectrum。甚至第一代IBM PC都使用了1970年代的處理器：Intel8088。直到Intel的80286（在IBM PC AT中）和後來的80386，1980年代的計算機才使用1980年代設計的處理器。這些近十年來的處理器提供了更高的時鐘速度和32位字長，以及新的工作模式，例如保護模式，這在早期的芯片中是不可用的。具體來說，英特爾80386是32位芯片。它擁有超過275,000個晶體管，每秒可執行超過500萬條指令。 80386的價格約為299美元。至關重要的是，在這些更高級的芯片中，從Microsoft Windows 2.0開始，保護模式允許使用虛擬內存，並將圖形用戶界面帶入商用計算機。 \n \xa0 \xa0 \xa0\xa0 32位微處理器在1990年代主導了消費市場。在1990年至1999年之間，處理器時鐘速度提高了十倍以上，並且在該十年後期開始出現64位處理器。在1990年代，微處理器不再為處理器和RAM使用相同的時鐘速度。這項技術可以提高處理器速度。 1993年，英特爾發布了奔騰處理器。奔騰芯片是60 MHz處理器。它裝有310萬個晶體管，售價約為875美元。 \n \xa0 \xa0 \xa0\xa0 在2000年代，64位處理器成為主流。由於冷卻技術達到頂峰，微處理器時鐘速度達到了上限。散發處理器熱量的能力已達到極限。製造商沒有採用昂貴且不切實際的冷卻系統，而是尋求其他方法來使用多核處理器技術來提高處理器性能。超頻誕生於1990年代，但在2000年代就已誕生。隨著多核技術的引入，處理器成本開始急劇下降。 \n \xa0 \xa0 \xa0\xa0 設計用於超頻處理器的現成的冷卻系統變得越來越普遍，而設計用於遊戲的PC的概念也越來越普遍。在過去的十年中，晶體管的數量增加了大約一個數量級，這一趨勢延續了過去的幾十年。處理器尺寸從180 nm減少到45 nm約四倍。 AMD在2007年發布了Athlon X2處理器系列。 AMD Athlon X2 Brisbane系列以1.9至2.6 GHz的速度進行處理，並包含512 KB L2緩存。 2012年，AMD發布了A10-5700台式機處理器。它包括一個4M L2高速緩存，並以3.4 GHz或Turbo模式下的4.0 GHz的速度進行處理。 AMD的A10-5800K與A10-5700同時發布，具有相同的緩存，但在Turbo模式下可提供3.8 GHz或4.2 GHz的處理速度。在2010年代，處理器通常容納2.5至40億個晶體管。 \n CPU技術 \n \xa0 \xa0 \xa0\xa0 多年來，CPU已添加了各種技術以提高其速度和效率。這些技術中的第一個稱為超線程或HT技術。 HT技術最初是由Intel開發的。它允許CPU在單個處理器內核中執行兩個“線程”。本質上，CPU模擬（或假裝為）兩個CPU，而不是實際的單個物理處理器。這樣可以更快地執行程序。考慮一個大教室，教室裡有很多學生，但只有一位老師。如果有多個學生提出問題，則講師需要盡快回答每個人的問題。無需完成第一個問題，而是處理第二個問題，超線程將允許教師在第一個問題仍在回答的同時開始回答第二個問題。這有效地提高了教師在較短的時間內回答更多問題的能力。 \n \xa0 \xa0 \xa0\xa0 第二項技術是對超線程的巨大改進，稱為多核設計。在多核設計中，處理器（實際上是單個硬件）在芯片本身中包含多個處理器。這些芯片具有雙核（兩個），四核（四個），六核（六個）和八核（八個）設計。八核心設計允許單個芯片包含多達八個處理器核心。八個處理器內核可同時執行八個不同且唯一的進程。在多核設計之前，如果要使用多個處理器（例如在服務器上），則必須具有一個帶有多個處理器插槽的特殊主板和一個能夠理解多個處理器的特殊操作系統。通過多核設計，可以使用單個插槽，並且任何操作系統都可以理解如何使用單個CPU（具有多個內核）。 \n \n \n \n 前端匯流排與系統匯流排 \n \xa0 \xa0 \xa0\xa0 總線是骨幹通信系統，可在計算機內部組件之間傳輸數據。 總線以兆赫（MHz）為單位，這是總線運行的速度。 MHz是在給定的每秒內發生的時脈頻率（MHz等於每秒數百萬次）。 主板總線以固定速度運行時，輸入/輸出端口和擴展插槽均以連接到相應插槽的設備確定的唯一速度運行。 每個端口都可以配置或協商為每個設備（例如FireWire，AGP，PCIe，PATA，SATA）以適當的速度（最大值）運行，因為每種連接類型都支持不同的速度。 \n \n \n \n 32位元和64位元處理器 \n \xa0 \xa0 \xa0\xa0 同時有32位元和64位元處理器。 這是一個重要的概念，因為如果您運行的是32位元處理器或32位元操作系統，則計算機最多只能訪問4 GB的RAM。 如果您使用32位 元 版本的Windows（例如Windows XP或Vista / 7 x86），則Windows將僅訪問3.25 GB的RAM。 第一個64位 元 處理器是AMD Athlon64。那些x64處理器與較慢的x86軟件和設備完全向後兼容。 通過使用x64，消除了4 GB的RAM限制，使我們可以訪問16 GB，32 GB，64 GB或更多的內存。 \n', 'tags': '', 'url': '處理器歷史.html'}, {'title': '虛擬技術', 'text': '\xa0 \xa0 \xa0\xa0 虛擬技術是CpU的絕佳補充。 虛擬 技術 正在席捲計算機世界，在此過程中為我們節省了大量資金。 過去，如果要運行多個操作系統，則必須有多台計算機，但現在不再需要。 使用硬件輔助虛擬 技術 ，我們可以使主機程序或主機操作系統（認為是一台物理計算機）在主機OS的桌面內運行一個或多個來賓操作系統（認為是虛擬計算機）。 在下面的圖像中，您可以在程序窗口中查看運行Windows的Macintosh OSX系統，並在另一個程序窗口中查看Ubuntu Linux。 在此示例中，我們在同一台計算機上同時使用三種不同的操作系統。 有許多程序可以使這種情況發生，包括廣受歡迎的商業程序VMWare和等同於免費軟件的VirtualBox。 \n \n \n \n \xa0 \xa0 \xa0\xa0 但是，為什麼我們要運行多個系統？好吧，如果您在一家僅使用為Windows構建的自定義程序但擁有Macintosh並需要在家運行該程序的公司工作，該怎麼辦？在過去，您只需要購買一台PC即可運行該程序。現在，您只需在Macintosh中加載Virtual Windows 7計算機並運行該程序即可。在服務器方面，服務器要花費數万美元。如果要運行小型Web服務器，則可能不需要這種類型的處理。因此，託管公司可以使用單個服務器，並在單個服務器上提供數百個虛擬服務器，您每月只需支付幾美元的訪問費。 \n \xa0 \xa0 \xa0\xa0 虛擬化正在繼續擴展，並將在可預見的將來繼續擴展。許多公司和個人正在遷移到存在虛擬機而無需內部部署硬件的雲端中。在雲端計算中，從雲端計算公司作為服務購買了運行多個操作系統或軟件的基礎架構。 \n 圖形處理器 GPU \n \xa0 \xa0 \xa0\xa0 圖形處理器（GPU）允許更快的視頻處理，更容易的內存訪問以及總體上較低的構建系統成本。 這個想法是，圖形不是由可能花費數百美元的專用圖形卡，而是由CPU內部的專用圖形協處理器（如下圖所示，底部的較小芯片）處理。 這些功能非常適合非3D用途，例如網絡衝浪，辦公產品，DVD和視頻播放或低端遊戲。 但是，如果將系統用於視頻/圖形製作，計算機輔助設計（CAD）或遊戲，則通常需要使用母板上的PCIe x16插槽進行連接的獨立（專用）圖形卡。 \n \n \n CPU散熱 \n \xa0 \xa0 \xa0\xa0 最後，我們需要討論在主板上運行CPU時如何冷卻。有幾種選擇。首先，有一個無源散熱器，它是一個帶有散熱片的金屬設備，可以將熱量從處理器散發出去。這是冷卻CPU的非常安靜的方法。但是，大多數現代CPU產生的熱量過多，僅被動散熱片就無法發揮作用。因此，無源散熱器通常與有源散熱器耦合，在有源散熱器上，專用風扇連接到金屬翅片散熱器的頂部，以更有效地吸收熱量。 \n \xa0 \xa0 \xa0\xa0 在將散熱器連接到CPU之前，技術人員應首先在CPU上塗導熱膏，以幫助熱量從CPU傳遞到金屬散熱器。因此，典型的安裝方法是將CPU放入處理器插槽中，對其進行導熱粘貼，然後將翅片散熱器連接到處理器頂部，最後將專用風扇連接到散熱器頂部。導熱膏是使CPU絕緣的相變材料。糊劑在室溫下為固體，但在較高溫度下變為液體。當變成液體時，它消除了空氣，並提供了更好的絕緣性。 \n \xa0 \xa0 \xa0\xa0 另一種選擇是使用液體冷卻系統。這是通過將特殊的液體溶液通過計算機泵送到熱交換器中來進行的，在熱交換器中，風扇在循環之前冷卻液體。這些系統僅用於非常高性能的系統和超頻系統，並且安裝和運行起來可能很複雜。 \n \xa0 \xa0 \xa0\xa0 在選擇冷卻系統時，噪音是一個大問題。到目前為止，無源系統是最安靜的，而涉及風扇的有源系統是最嘈雜的。與較大的CPU風扇相比，液冷系統通常使用較小的風扇來冷卻液體，因此，這是一種更安靜的冷卻方法，但價格昂貴。 \n \n \n \n', 'tags': '', 'url': '虛擬技術.html'}, {'title': 'PCH6', 'text': '', 'tags': '', 'url': 'PCH6.html'}, {'title': '記憶體基本運作原理', 'text': '\xa0 \xa0 \xa0\xa0 為了使計算機正常運行，它需要一個臨時存儲空間來存儲從用戶或硬盤驅動器輸入到計算機中的數據，並將要寫入的數據存儲到更永久的存儲器中。該臨時存儲稱為RAM或隨機存取存儲器。 RAM是CPU處理數據的工作區。計算機啟動時，操作系統（操作系統）將啟動文件加載到RAM中。 RAM是動態的並且不斷變化。它的運行速度比硬盤驅動器快得多，並且可由計算機隨時更改。 RAM是易失性內存，這意味著在斷電時它會丟失所有信息，因此只能用作臨時存儲。該內存用於操作系統啟動文件（引導加載程序），程序，數據和磁盤緩存。向計算機添加RAM是一個人可以執行的最簡單，最有效的升級之一，因為它可以極大地改善CPU與其他輸入設備（如硬盤驅動器）之間的傳輸，從而提高了計算機的整體速度。 \n \n \n \n', 'tags': '', 'url': '記憶體基本運作原理.html'}, {'title': '記憶體模組', 'text': '\xa0 \xa0 \xa0\xa0 內存的用途之一是充當磁盤緩存。就像我們在處理器中提到的緩存一樣，RAM充當了硬盤驅動器中最近使用和常用數據的更快的臨時存儲區域。由於訪問RAM比查找硬盤驅動器扇區中的數據更快，因此RAM可提高計算機的性能。僅當內存中有可用空間時才可以使用磁盤緩存。但是，如果您沒有足夠的物理內存可用怎麼辦？當物理內存不足時，計算機將創建虛擬內存。虛擬內存有時也稱為“頁面文件”或“交換文件”。虛擬內存是RAM的慢速替代品，因為它是在硬盤驅動器上創建的臨時文件，並模擬物理RAM。本質上，磁盤緩存使RAM可以充當極快的硬盤驅動器，而虛擬內存由硬盤驅動器上的文件組成，它們的運行速度非常慢。 RAM的速度比磁存儲（如硬盤驅動器和軟盤）或光存儲（DVD，CD，藍光）要快。這是因為RAM是固態設備，訪問時間沒有特別長。 RAM的運行速度為十億分之一秒（納秒），而硬盤驅動器和其他磁性介質的運行速度非常慢，為千分之一秒（毫秒）。 RAM不足會導致計算機運行更慢。因此，升級RAM是A +技術人員執行的最常見的升級之一。 \n \n \n 記憶體分類 \n \xa0 \xa0 \xa0\xa0 RAM有多種分類：內存模塊類型，芯片類型，速度和奇偶校驗。內存模塊因類型而異，具體取決於母板和母板的外形尺寸。內存模塊由其上的針腳數量定義，例如240針DIMM（雙列直插式內存模塊），184針DIMM等。 \n \xa0 \xa0 \xa0\xa0 RAM也根據存儲芯片類型進行分類。過去，系統根據製造商使用不同類型的芯片，但是當前的系統大多使用相同類型的芯片，通常是DDR（雙數據速率），DDR2或DDR3。儘管DDR是最常見的類型，但某些獨特的系統可能會使用RDRAM（Rambus動態隨機存取存儲器）。 \n \xa0 \xa0 \xa0\xa0 另一個RAM分類基於速度。較舊的內存以納秒（例如60納秒）分類。隨著時間的流逝，所有內存變為幾乎相同的速度（以納秒為單位），因此他們將其更改為總線速度（例如，PC-133內存以133 MHz的總線速度運行）。現在，大多數當代內存都是通過吞吐量來衡量的（PC2-6400，運行於800 MHz，但具有6.4 GBps的帶寬）。 \n \xa0 \xa0 \xa0\xa0 最後，可以使用奇偶校驗，非奇偶校驗或ECC購買存儲器並按其分類。奇偶校驗存儲器在將數據讀/寫到芯片時檢查錯誤。儘管奇偶校驗內存可以檢測到錯誤，但無法糾正錯誤。非奇偶校驗內存是台式計算機中最常見的類型之一，沒有錯誤檢查功能。糾錯碼（ECC）是奇偶校驗的高級版本，可以發現錯誤並在從芯片讀取/寫入該錯誤時對其進行糾正。由於這些附加功能，ECC往往比等效的非奇偶校驗RAM慢。 \n \n \n \n 主機板決定記憶體類型 \n \xa0 \xa0 \xa0\xa0 您需要使用的內存類型由主板決定。最佳做法是在購買新模塊之前，先檢查主板手冊中的內存類型，大小和速度是否合適。某些主板可讓您混合使用模塊的大小，而另一些則要求所有模塊的大小均相同。例如，如果母板上有兩個內存插槽，則可能允許您在一個插槽中放置一個1 GB的模塊，在另一個插槽中放置一個2 GB的模塊。其他主板要求所有插槽中都具有相同大小的芯片，例如兩個插槽中都有1 GB的模塊。要考慮的另一個因素是主板的“庫”大小。一些主板支持一組，這意味著您可以在主板中使用單個模塊。其他主板需要兩個模塊才能完成存儲（插槽必須成對填寫）。 \n \xa0 \xa0 \xa0\xa0 主板可能支持的另一個功能稱為雙通道或三通道。在這些通道模式下，母板要求用戶在兩個（雙）或三個（三重）插槽中安裝相同尺寸和速度的模塊。這樣可以交錯訪問內存，以加快內存的性能，從而加快計算機的運行速度。考慮一下交錯，就好像您有兩匹馬拉著一輛馬車而不是一輛。雖然每匹馬可能自己可以拉100磅，但它們合起來可以拉250磅。在內存上下文中進行交織是相同的想法—交織內存時訪問速度會提高。一起訪問兩個內存芯片的總和比單獨訪問一個芯片更快。 \n \xa0 \xa0 \xa0\xa0 最後，可安裝的模塊總數也由主板的外形尺寸決定。如果您使用的是較小型的主板，例如mini-ATX，則其模塊插槽可能會更少（也許是兩個插槽，而完整的ATX板上則是四個或六個）。 \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '記憶體模組.html'}, {'title': '記憶體的歷史', 'text': '\xa0 \xa0 \xa0\xa0 在不同時間段內，通常使用不同類型的RAM。了解所有這些信息非常重要，因為許多公司使用的都是舊系統和最新系統。 DRAM或動態RAM是最古老的類型之一。它需要經常刷新內容。 DRAM將數據或程序代碼的每一位存儲在由電容器和晶體管組成的存儲單元中，並且通常以矩形配置的存儲單元來組織。 DRAM存儲單元是動態的，因為它需要每幾毫秒刷新一次或給其提供新的電荷，以補償電容器的電荷洩漏。 \n \xa0 \xa0 \xa0\xa0 SRAM或靜態RAM解決了不斷刷新的問題，但製造成本很高。因此，SRAM僅用於非常高速的需求，例如1級，2級和3級CPU高速緩存，硬盤驅動器緩衝區和LCD屏幕緩衝區。 \n \xa0 \xa0 \xa0\xa0 SDRAM或同步DRAM是第一個以與主板總線相同的速度運行的內存。最初的芯片是168針雙列直插式內存模塊，其速度額定為MHz。常見的命名約定包括PC-66（相當於66 Mhz），PC-133或PC-266。 \n \xa0 \xa0 \xa0\xa0 儘管SDRAM的性能與主板總線相同，但CPU的運行速度比主板總線快許多倍。 DDR SDRAM代表雙倍數據速率同步動態隨機存取存儲器。這種類型的存儲器可以在每個時鐘週期兩次傳輸數據，從而使速度比傳統SDRAM快一倍。這些芯片有184引腳的型號，額定為MBps（吞吐量）。一個很好的例子就是PC-1600，吞吐量為1600 MBps。 \n \xa0 \xa0 \xa0\xa0 DDR2 SDRAM是雙倍數據速率SDRAM，具有更高的延遲，但對外部總線的訪問速度更快。這些芯片具有240個引腳以將其模塊連接到插槽，並且還以MBps額定，例如PC2-4200，即4200 MBps（或4.2 GBps）。 \n \xa0 \xa0 \xa0\xa0 DDR3 SDRAM被稱為雙倍數據速率3 SDRAM，是當今使用的最新一代SDRAM。它在較低的電壓下運行，並且比DDR2更快，但是與之前的DDR2模塊相比，延遲又增加了。這些模塊還具有240針，但是它們的“鍵控”與DDR2不同。 “鍵控”部分是引腳上的間隙所在的位置，因此只有DDR2可以插入DDR2插槽，而DDR3只能插入DDR3插槽。這些的常用符號是PC3-10600，其中10600是MBps的速度。 \n \xa0 \xa0 \xa0\xa0 Rambus直接RAM（RDRAM）也被稱為RIMM（Rambus嵌入式存儲模塊）。這些模塊具有184針變體（16位版本）和232針變體（32位版本）。主板上的每個空插槽都必須在其中放置一個連續性模塊（CRIMM），否則主板將無法正確識別內存。在最近的系統中未使用此功能，但在Pentium 4系統中大量使用了此功能。 RDRAM以MBps為單位進行測量，例如RIMM 4200（或4200 MBps）。 \n \n \xa0 \xa0 \xa0\xa0 多年以來，內存還使用了其他變體，但如今並不常見。 單列直插式內存模塊或SIMM在芯片的兩側都有30或72個連接器。 單列直插式引腳封裝或SIPP只有30個引腳，它們是物理引腳而不是連接器。 \n \xa0 \xa0 \xa0\xa0 DDR，DDR2和DDR3芯片使用雙列直插式內存模塊或DIMM，模塊的每一側在連接器中具有不同的引腳排列。 SODIMM是小型DIMM，是便攜式計算機，筆記本計算機和打印機中使用的緊湊型內存。 它可以採用DDR SODIMM，DDR2 SODIMM或DDR3 SODIMM。 SODIMM非常普遍，今天仍然大量使用。 \n \xa0 \xa0 \xa0\xa0 最後，有一種筆記本電腦版本的Rambus內存，稱為小型Rambus模塊，但在現代系統中很少使用。 \n \n \n \n', 'tags': '', 'url': '記憶體的歷史.html'}, {'title': '記憶體同位位元', 'text': '\xa0 \xa0 \xa0\xa0 內存模塊的頻寬由可傳輸的位數決定。 內存最初以8位形式出現，但在當前系統中已增加到16位，32位和現在的64位。 必須以存儲體的形式添加內存，以確保其 頻寬 等於內存總線的 頻寬 。 例如，如果您需要64位，而單個模塊提供64位，則庫中將只有一個模塊。 如前所述，雙通道內存需要兩倍的存儲量，因此存儲庫中需要兩個64位（128位）DIMM，而三通道則需要三個。 \n \n 奇偶效驗位和修正錯誤記憶體 \n \xa0 \xa0 \xa0\xa0 奇偶校驗用於執行基本的錯誤檢查並確保內存內容可靠。此內存比非奇偶校驗慢，但增加了服務器和某些台式機工作站所需的可靠性。 \n \xa0 \xa0 \xa0\xa0 奇偶校驗是一種檢測內存錯誤的相當簡單的方法，沒有任何校正功能。奇偶校驗在添加到傳輸數據字符串的單個數據位中表示。如果模塊通常具有七個數據位，則將八分之一添加為奇偶校驗位。如果模塊通常有八個芯片用於數據，則將第九個芯片用於奇偶校驗。 \n \xa0 \xa0 \xa0\xa0 每個字節都有一個與之關聯的奇偶校驗位。在七位組成原始數據的情況下，總共傳輸了八位（七位原始數據位加一個奇偶校驗位）。在八位組成原始數據的情況下，總共傳輸九位（八位數據位加一位奇偶校驗位）。奇偶校驗位在寫入時設置，然後在讀取時進行計算和比較，以確定自存儲數據以來是否有任何位發生了更改。這種類型的檢查僅限於檢測單個位錯誤。如果更改了兩位，則奇偶校驗將“通過”，並且允許該錯誤可能破壞數據。 \n \xa0 \xa0 \xa0\xa0 奇偶校驗可以實現為“ 0”奇偶校驗或“ 1”奇偶校驗。存儲字節時，將加零（如果選擇了“ 1”奇偶校驗，則為零）的數目。結果存儲在奇偶校驗位中-如果為奇數，則為“ 1”；如果為偶數，則為“ 0”。當從內存中讀取該字節時，將再次對這些位進行計數，並將結果與奇偶校驗位中存儲的結果進行比較。匹配表示數據從存儲時起就沒有改變（或者以結果相同的方式更改了兩位）。 \n \xa0 \xa0 \xa0\xa0 不管發送的原始數據位數如何，確定奇偶校驗位的過程都是相同的。通常，原始數據有七位或八位。 \n \xa0 \xa0 \xa0\xa0 奇偶校驗位是通過對數據字符串中“ 1”位的數量進行計數來確定的。 \n \n \n \n \n 將奇偶校驗位設置為： \n \n \n \n 偶同位 \n 奇同位 \n \n \n 偶數個1位元 \n 0 \n 1 \n \n \n 奇數個1位元 \n 1 \n 0 \n \n \n \n 範例: \n \xa0 \xa0 \xa0\xa0 使用偶校驗發送八位原始數據11110000。 要確定奇偶校驗位（數據的第9位），請計算數據字符串中“ 1”位的數量。 在這種情況下，有四個“ 1”位。 因為“ 1”位的總數是四，所以數據是偶數。 因此，奇偶校驗位設置為0。 \n \n 範例: \n \xa0 \xa0 \xa0\xa0使用奇偶校驗傳輸七位原始數據1000010。 要確定奇偶校驗位（數據的第八位），請計算數據串中“ 1”位的數量。 在這種情況下，有兩個“ 1”位。 因此，將奇偶校驗位設置為1，因為數據中“ 1”位（兩個）的總數是偶數，這與傳輸的奇數奇偶校驗不匹配。 由於“ 1”位的數量和奇偶校驗設置（奇數）不匹配，因此必須將奇偶校驗位設置為1。由於“ 1”位的總數為2，因此將奇偶校驗位“ 1”添加到 該字符串將在整個八位字符串（七個數據位加一個奇偶校驗位）中產生奇數個“ 1”位（三個）。 \n \n \xa0 \xa0 \xa0\xa0由於所有軟錯誤中大約90％是單比特類型的，因此奇偶校驗通常在大多數情況下就足夠了。 不幸的是，由於要花費額外的時脈來計算，存儲和獲取奇偶校驗位，因此錯誤檢查要付出一定的代價，這會稍微降低性能。 另一個考慮因素是，由於無法通過奇偶校驗解決錯誤，因此實際上必須停止應用程序，並發出一條錯誤消息，指出遇到奇偶校驗錯誤。 \n \n \n \n \n \n \n \n 原始數據 \n Count of “1” bits \n 傳輸的位元（8位或9位，取決於原始位的數量），包括奇偶校驗 \n \n \n \n \n 偶同位 \n 奇同位 \n \n \n \n \n 0000000 \n 0 \n 00000000 \n 00000001 \n \n \n 0101101 \n 4 \n 01011010 \n 01011011 \n \n \n 0101010 \n 3 \n 01010101 \n 01010100 \n \n \n 10000000 \n 1 \n 10000001 \n 100000000 \n \n \n 11111100 \n 6 \n 111111000 \n 111111001 \n \n \n 10001100 \n 3 \n 100011001 \n 100011000 \n \n \n \n \n \n \n \n \xa0 \xa0 \xa0\xa0 錯誤更正碼（ECC）使奇偶校驗概念更進一步，不僅可以識別錯誤，還可以糾正問題。 要確定是否由於奇偶校驗而對原始數據進行了校正或更改，請檢查完整的傳輸數據字符串，包括奇偶校驗位。 \n 範例: \n \xa0 \xa0 \xa0\xa0 使用偶校驗發送111100000。 要確定是否在傳輸過程中更改了內存，請計算數據字符串中包括奇偶校驗位的“ 1”位的數量。 在這種情況下，有四個“ 1”位。 由於數據中的“ 1”位（四位）總數為偶數，與傳輸的偶數奇偶校驗相匹配，因此未更改任何存儲器。 \n \n 範例: \n \xa0 \xa0 \xa0\xa0使用奇偶校驗發送10000100。 要確定是否在傳輸過程中更改了內存，請計算數據字符串中包括奇偶校驗位的“ 1”位的數量。 在這種情況下，有兩個“ 1”位。 數據中“ 1”位的總數（兩個）是偶數，與傳輸的奇數奇偶校驗不匹配。 因此，內存已更改。 \n \n 單面和雙面存儲器 \n \xa0 \xa0 \xa0\xa0 內存可以是單面或雙面的。 雙面模塊的好處在於，單個芯片和單個插槽中可以容納更多的存儲空間。 有些主板支持雙面SIMM，而其他主板則不支持，因此查看主板手冊以獲取指導很重要。 要確定模塊是否雙面，只需查看一下雙面即可。 如果芯片的兩面都焊接，則為雙面SIMM。 \n \n \n \n \n', 'tags': '', 'url': '記憶體同位位元.html'}, {'title': '安裝記憶體模組', 'text': '\xa0 \xa0 \xa0\xa0 安裝內存是計算機的常見升級，並且是很容易執行的任務。 內存模塊作為內存的“模板”（或模塊）安裝在主板上的“插槽”中。 \n \n \xa0 \xa0 \xa0\xa0 安裝記憶模板的過程相當容易，但是必須謹慎且精確。 要安裝記憶模板（或模塊）： \n \xa0 \xa0 \xa0\xa0 始終確保採取適當的ESD（靜電釋放）保護措施，以確保在安裝過程中不會損壞主板和內存模塊。關閉計算機電源，然後拔下電源線。 \xa0 \xa0 \xa0\xa0 打開外殼，開始安裝記憶模板。 始終將記憶模版放在芯片的側面，而不要緊握金觸點。將內存模塊的連接器與主板上的插槽對齊。確認鎖定卡舌處於打開位置。垂直向下推動模塊，直到卡舌旋轉到鎖定位置（需要用力）。 \n 重要說明：切勿觸摸模塊上的金色連接器！ 觸點可能會腐蝕，或者由於靜電放電會損壞模塊。 \n \xa0 \xa0 \xa0\xa0 要了解有關如何安裝RAM的更多信息，請訪問www.wikihow.com/Install-RAM。 \n \n \n \n \n', 'tags': '', 'url': '安裝記憶體模組.html'}, {'title': '介紹\xa0BIOS CMOS 與軟體', 'text': '\xa0 \xa0 \xa0\xa0 開啟計算機後，計算機的微處理器會使用稱為BIOS（基本輸入/輸出系統）的程序來啟動計算機系統。 BIOS還管理計算機操作系統和已連接/已連接的設備（例如硬盤驅動器，視頻適配器，鍵盤，鼠標和打印機）之間的數據流。 \n \n \xa0 \xa0 \xa0\xa0 計算機的BIOS是最常見的固件示例。 固件是芯片上的軟件，是計算機啟動時計算機運行的第一個軟件。 BIOS具有多個角色，包括執行開機自檢，該自檢將測試並初始化處理器，視頻卡，磁盤驅動器和適配器。 BIOS還包括計算機的低級“操作系統”，它使計算機可以從最基本的組件（包括鍵盤，鼠標和磁盤驅動器）獲取輸入並提供輸出。 BIOS存儲在ROM（只讀存儲器）芯片中，但可以通過過程調用“刷新”進行升級。 \n \xa0 \xa0 \xa0\xa0 BIOS是允許用戶更改設置的程序，而設置本身則存儲在互補金屬氧化物半導體或CMOS中。 CMOS是電池供電的存儲芯片。 \n 認識BIOS和CMOS \n \xa0 \xa0 \xa0\xa0 BIOS用於配置通用設置，例如計算機讀取設備的順序。 此命令稱為引導命令。 此外，BIOS還用於配置打開和關閉各種輸入/輸出端口的設置，以及各種CPU設置（例如虛擬化和超頻）的配置。 \n 更改BIOS時要非常小心。 不正確的設置可能會使您的計算機無法啟動。 \n \n BIOS配置以下設置： \n ●引導順序 ● 存儲設備（USB驅動器，硬盤驅動器，軟盤驅動器，光盤驅動器） ● 內置端口（SATA，eSATA，PATA，USB，IEEE-1394，串行，並行，PS / 2） ● AGP，PCI，PCIe插槽 ● 集成芯片組（音頻，視頻，網絡） ● 虛擬化 ● 時脈速度 ● 記憶體（RAM） ● 能源管理 ● 入侵檢測 ● 密碼和加密 ● PC健康工具（溫度，電壓等） ● 直接訪問Web或其他服務，而無需啟動計算機（特定於UEFI） \n \xa0 \xa0 \xa0\xa0 當按下計算機上的電源按鈕時，引導過程的第一步是開機自檢，稱為POST。 成功進行POST後，BIOS從CMOS讀取設置，BIOS從配置的引導設備中查找操作系統。 找到操作系統後，操作系統的引導加載程序將開始進行操作系統引導過程，並將計算機的控制權移交給操作系統。 \n \n 開機過程： \n 1.打開計算機電源。 2.BIOS執行開機自檢（POST）。 3.BIOS從CMOS讀取設置。 4.BIOS從配置的引導設備中查找操作系統。 \n \n \n \n', 'tags': '', 'url': '介紹\xa0BIOS CMOS 與軟體.html'}, {'title': '互補金屬氧化物半導體', 'text': '\xa0 \xa0 \xa0\xa0 CMOS（互補金屬氧化物半導體）是電池供電的存儲芯片。 它是非易失性存儲器，用於存儲BIOS設置，並內置在主板中。 只要電池電量剩餘，就會向CMOS提供DC（直流電）並保留設置。 如果計算機不斷丟失設置，則需要更換電池。 較舊的CMOS電池型號使用DS12887A電池或AA尺寸的3.6伏Eternacell電池，通常可以使用大約三年。 較新的CMOS型號包括內置鋰離子電池，該電池可使用長達10年。 當前使用的最典型的外部電池是CR2032，它類似於標準的手錶電池。 當電池開始出現故障時，向用戶顯示的第一個信號是系統時脈經常浪費時間。 \n \n \n', 'tags': '', 'url': '互補金屬氧化物半導體.html'}, {'title': '配置系統BIOS', 'text': '\xa0 \xa0 \xa0\xa0 要更改CMOS中的設置，用戶需要進入BIOS。 為此，用戶必須在計算機製造商設置的開機過程中按下有效的鍵或組合鍵。 用於進入BIOS的最常用鍵是F2和/或Delete。 通常，在開機過程中，進入BIOS所需的擊鍵將顯示在監視器上。 如果未顯示擊鍵，則快速搜索製造商的網站通常會告訴用戶輸入BIOS所需的擊鍵。 \n \n \xa0 \xa0 \xa0\xa0 BIOS界面和用於進入BIOS的擊鍵取決於BIOS製造商。 下面是來自兩個不同製造商的BIOS接口的圖像。 請注意，儘管兩者之間的可用信息是一致的，但界面略有不同。 \n \n \n 統一可延伸韌體介面\xa0 UEFI \n \xa0 \xa0 \xa0\xa0 傳統上，只有一種類型的BIOS，它完全依賴於基於文本的菜單和用於輸入的鍵盤。 最近，大多數BIOS製造商已切換到統一的可延伸韌體介面或UEFI。 此更新的BIOS允許鍵盤和鼠標輸入，並提供GUI而不是標準的基於文本的菜單。 支持GUID分區表（GPT），允許訪問最大2 TB的磁盤，並向後兼容舊分區結構（例如主啟動記錄（MBR）和Linux的GRand Unified Bootloader（GRUB）；從可移動媒體啟動；用戶界面） 允許在線連接以進行Web訪問，診斷和文件管理；以及安全啟動（Secure Boot），可防止操作系統前代碼被修改；其中某些UEFI BIOS還包括允許用戶上網，玩基本遊戲和使用的軟件。 無需進入正常操作系統即可備份程序。 \n \n 自動配置BIOS與CMOS \n \xa0 \xa0 \xa0\xa0 自動配置是某些BIOS的功能。 儘管自動BIOS配置並不總是會創建最佳設置，但是如果發生重大錯誤以將安全回滾創建到已知的良好狀態，它可能會非常有用。 自動配置選項包括BIOS默認設置（原始/故障安全設置）和設置默認設置（最佳設置）。 通常有一個turbo設置，可以快速配置以實現更快的系統。 在對系統進行故障排除時，BIOS的自動配置通常很有用。 \n \n \n \n', 'tags': '', 'url': '配置系統BIOS.html'}, {'title': '啟動自我檢測和錯誤報告', 'text': '\xa0 \xa0 \xa0\xa0 開機時，POST（開機自檢）是計算機基本輸入/輸出系統（或“啟動程序”）運行以確定計算機鍵盤，隨機存取存儲器，磁盤驅動器的診斷測試順序。 ，並且其他硬件運行正常。 POST是BIOS在引導時執行的初始測試。 POST的作用是查找硬件錯誤，並報告這些錯誤。 POST檢查以下內容： \n ● CPU和部分BIOS ● 系統時間 ● 視頻顯示卡 ● 記憶 ● 鍵盤 ● 磁盤驅動器 \n \xa0 \xa0 \xa0\xa0 如果檢測到必要的硬件並發現其運行正常，則計算機將開始啟動。如果未檢測到硬件或發現硬件運行不正常，BIOS將發出錯誤消息。根據問題的性質，此錯誤消息可能是顯示屏上的文本和/或一系列編碼的嗶聲。由於POST在激活計算機的視頻卡之前運行，因此可能無法進入顯示屏幕。嗶聲的模式可以是可變數目的短嗶聲，也可以是長短嗶聲的混合，具體取決於安裝的BIOS類型。嗶聲的模式包含有關所檢測問題性質的消息。例如，如果未檢測到鍵盤，則特定的嗶嗶聲將告知您該事實。在POST中發現的錯誤通常是致命的（也就是說，它導致當前程序停止運行），並且將終止引導過程，因為檢查的硬件對於計算機的功能絕對必要。 \n \xa0 \xa0 \xa0\xa0 嗶聲的模式類似於摩爾斯電碼。嗶聲的數量和順序具有計算機製造商設定的含義。因此，每個嗶嗶聲的含義因製造商而異。包含一些AMI和Dell嗶聲代碼的圖表如下所示。 \n 代碼比較表 \n \n \n \n BEEP CODE \n AMI \n DELL \n \n \n \n \n 1 \n DRAM refresh failure \n BIOS ROM corruption or failure \n \n \n 2 \n Parity circuit failure \n RAM not detected \n \n \n 3 \n Base 64K RAM failure \n Motherboard failure \n \n \n 4 \n System timer failure \n RAM failure \n \n \n 5 \n Process failure \n CMOS battery failure \n \n \n \n 範例 \n 嗶聲代碼 這是有問題的計算機發出的嗶嗶代碼示例： \n \xa0 \xa0 \xa0\xa0 此蜂鳴聲代碼包含兩個短蜂鳴聲。 這個POST嗶嗶聲序列是什麼意思？ 這取決於BIOS的製造商。 \n \xa0 \xa0 \xa0\xa0 使用搜索引擎搜索“ AMI嗶聲代碼”。 這可能是典型的結果。 該網站告訴我們，在AMI計算機上，兩聲短促的嗶嗶聲表示內存奇偶校驗錯誤。 \n \xa0 \xa0 \xa0\xa0 現在搜索“ AST Research BIOS嗶聲代碼”。 這是一個典型的結果。 該網站告訴我們，在AST Research BIOS計算機上，兩聲短促的嗶嗶聲表示鍵盤控制器緩衝區故障。 \n \xa0 \xa0 \xa0\xa0 如果在Internet上搜索“ IBM bios嗶聲代碼”，則表明該嗶聲代碼指示POST錯誤，因此您應該在屏幕上查看錯誤代碼。 \n \xa0 \xa0 \xa0\xa0 在POST期間診斷問題時，了解BIOS製造商很重要，因為嗶嗶代碼的含義因製造商而異。 \n', 'tags': '', 'url': '啟動自我檢測和錯誤報告.html'}, {'title': 'BIOS更新', 'text': '\xa0 \xa0 \xa0\xa0 那麼如何更新BIOS？ 記得BIOS是固件或芯片上的軟件。 出現電源管理問題或處理器升級時，BIOS需要更新。 請始終在製造商的網站上查看最新固件版本。 在舊系統（1980年代至1990年代）中，實際的BIOS芯片必須完全更換。 在較新的系統中，BIOS被“刷新”。 刷新是一個特殊的過程，其中BIOS被覆蓋，除非絕對必要，否則不應該這樣做。 始終確保在執行BIOS刷新之前備份信息； 如果無法成功進行閃爍，則係統將無法恢復，甚至無法啟動。 \n', 'tags': '', 'url': 'BIOS更新.html'}]};