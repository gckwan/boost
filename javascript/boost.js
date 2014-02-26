// maps from category names to the conditions in that category
var categories = {"urinary":["urinary tract infections","prostate-related urinary problems"],"infections":["respiratory tract infections","cancer","viruses","immune system","tonsilitis","colds","flu","antibiotic","antifungal","herpes","hepatitis","diarrhoea","gastrointenstinal and respiratory infections","diarrhoea related to antibiotic use","sore throat","cankersores"],"sex":["infertility in men","diabetes","impotence","herpes"],"men":["infertility in men","memory in young men","prostate cancer","prostate-related urinary problems","kidney cancer in men"],"children":["infertility in men","child intelligence","certain birth defects","gastrointestinal disease in infants","morbidity and mortality in preterm infants","child development (when not anaemic)","child ADHD","birth defects"],"mental health":["Alzheimer's","stress","alzheimer's disease","dementia","cognition","memory in young men","depression","mental illness","child intelligence","anxiety","cognitive performance","child development (when not anaemic)","sleep","relaxation","child ADHD","insomnia in the elderly","mental health","addiction","memory","fatigue","PMS","bipolar disorder and alcholism","depression in women","alertness","wakefulness","insomnia","OCD","panic disorder","mood disorders"],"general health":["digestive aid","burns","cuts","mortality","oxidative stress","dna damage","immune system","weight loss","cancer","anti-aging","diabetes","cataracts","autoimmune","obesity","ageing","joints","arthritis","Crohn's disease","asthma","eye health","general health","child development (when not anaemic)","exercise performance","protein synthesis","insulin control","decongestant","athletic performance","fatigue","liver disease","cholesterol","metabolism","all-cause mortality","teeth"],"cancer":["weight loss","cancer","cancer prevention","skin cancer","colorectal cancer","breast cancer (in premenopausal women)","viruses","immune system","diabetes","cancer symptoms","breast cancer","cancer treatment","prostate cancer","heart health","metabolism","kidney cancer in men"],"women":["menopause","osteoporosis (in postmenopausal women)","breast cancer (in premenopausal women)","cancer","breast cancer","PMS","depression","depression in women"],"musculoskeletal":["rheumatism","arthritis","osteoporosis (in postmenopausal women)","joint pain","arthritis (only when injected)","cholesterol","bone health","osteoporosis"],"digestion":["bowel disorders","cancer symptoms","Crohn's disease","asthma","diabetes","nausea and vomiting","gastrointestinal disease in infants","dyspepsia","IBS","diarrhoea","gastrointenstinal and respiratory infections","diarrhoea related to antibiotic use","peptic ulcer"],"cardio":["blood pressure","obesity","heart disease","lipid and antioxidant status","cardiovascular disease","cholesterol","chronic venous insufficiency","heart health","cancer","diabetes","metabolism","weight loss","arthritis"],"pain":["migraine","cancer symptoms","wound healing","swelling"], "metabolic": ["diabetes"]};  

// maps from conditions to supplements purported to aid those conditions
var conditions = {"digestive aid":{"plant / herb":[["aloe vera","0","digestive aid,burns,cuts","general health","plant / herb","","21.4","16800","","Cochrane Review"]]},"burns":{"plant / herb":[["aloe vera","0","digestive aid,burns,cuts","general health","plant / herb","","21.4","16800","","Cochrane Review"]]},"cuts":{"plant / herb":[["aloe vera","0","digestive aid,burns,cuts","general health","plant / herb","","21.4","16800","","Cochrane Review"]]},"respiratory tract infections":{"plant / herb":[["andro-graphis","2","respiratory tract infections","infections","plant / herb","OTW","0.644","3630","http://www.ncbi.nlm.nih.gov/pubmed/14748896",""]]},"infertility in men":{"compound":[["anti-oxidants","4","infertility in men","sex,men,children","compound","","28","305000","http://www.biomedsearch.com/nih/systematic-review-effect-oral-antioxidants/20378409.html","Reproductive Biomedicine Online     "]]},"mortality":{"compound":[["anti-oxidants","0","mortality","general health","compound","","1.03","12100","http://jama.ama-assn.org/content/297/8/842.full.pdf","Cochrane Review"]],"vitamin":[["vitamin E","0","mortality","general health","vitamin","","2.72","102000","http://med.over.net/javne_datoteke/novice/datoteke/13081-JAMA-antioxidants.pdf","American Medical Association"]]},"oxidative stress":{"compound":[["asta-xanthin","1","oxidative stress","general health","compound","OTW","1.65","8060","http://www.ncbi.nlm.nih.gov/pubmed/19656058","PubMed"]]},"dna damage":{"plant / herb":[["astragalus","0.5","dna damage,immune system","general health","plant / herb","OTW","0.385","19900","http://www.ncbi.nlm.nih.gov/pubmed/15035888","Block,Mead (2003)"]]},"immune system":{"plant / herb":[["astragalus","0.5","dna damage,immune system","general health","plant / herb","OTW","0.385","19900","http://www.ncbi.nlm.nih.gov/pubmed/15035888","Block,Mead (2003)"],["cat's claw","0","cancer,viruses,immune system","cancer,infections","plant / herb","","1.07","1220","","PubMed"]]},"Alzheimer's":{"vitamin":[["B vitamins","0.5","Alzheimer's","mental health","vitamin","","7.62","26400","http://www.ncbi.nlm.nih.gov/pubmed/18854539","PubMed"]],"compound":[["fish oil / omega 3","1","Alzheimer's,dementia","mental health","compound","","2.83","6760","http://www.ncbi.nlm.nih.gov/pubmed/17030655","PubMed"],["silicic acid","0","Alzheimer's","mental health","compound","OTW","0.209","21200","http://www.ncbi.nlm.nih.gov/pubmed/16988476","PubMed"]]},"weight loss":{"other":[["bee pollen","0.5","weight loss,cancer","general health,cancer","other","","3.77","4160","http://www.ncbi.nlm.nih.gov/pubmed/20598400","European Journal of Medicinal Chemistry"]],"compound":[["taurine","1.5","weight loss,cholesterol","general health,cardio","compound","","1.17","6010","http://www.springerlink.com/content/4gnpvkgpg7ff7qc4/",""]]},"cancer":{"other":[["bee pollen","0.5","weight loss,cancer","general health,cancer","other","","3.77","4160","http://www.ncbi.nlm.nih.gov/pubmed/20598400","European Journal of Medicinal Chemistry"]],"compound":[["beta-glucans","0","cancer","cancer","compound","OTW","0.484","3280","http://www.ncbi.nlm.nih.gov/pubmed/19515245","PubMed"],["omega 6","0","cancer","cancer","compound","","2.86","17000","http://jnci.oxfordjournals.org/cgi/content/abstract/97/21/1611?maxtoshow=&h…T=&fulltext=eveing+primrose+oil&searchid=1&FIRSTINDEX=0&resourcetype=HWCIT","Journal of the National Cancer Institute"],["resveratrol","0","cancer,diabetes,heart health,metabolism","cancer,diabetes,cardio","compound","OTW","6.9","35100","http://www.cancerletters.info/article/S0304-3835(08)00252-8/abstract","Cancer Letters"]],"mineral":[["calcium + vit. D","4","breast cancer (in premenopausal women),cancer","cancer,women","mineral","","4.11","379000","http://www.ncbi.nlm.nih.gov/pubmed/17533208","PubMed"],["selenium","1.5","cancer","cancer","mineral","","7.57","153000","http://www.ncbi.nlm.nih.gov/pubmed/20568891","PubMed"]],"plant / herb":[["capsaicin","0","cancer","cancer","plant / herb","","3.08","27100","","no human trials"],["cat's claw","0","cancer,viruses,immune system","cancer,infections","plant / herb","","1.07","1220","","PubMed"],["turmeric (curcumin)","1","cancer","cancer","plant / herb","OTW","17.5","17000","http://www.ncbi.nlm.nih.gov/pubmed/20214562","PubMed"]],"vitamin":[["vitamin A: beta-carotene","0","cancer","cancer","vitamin","","1.41","19400","http://www.ncbi.nlm.nih.gov/pubmed/18689373","PubMed"],["vitamin D","1","cancer","cancer","vitamin","OTW","9.36","31800","http://www.ncbi.nlm.nih.gov/pubmed/20164683","PubMed"]]},"anti-aging":{"compound":[["benfotiamine (fat-soluble thiamin)","0.5","anti-aging,diabetes","diabetes,general health","compound","","0.44","1030","http://www.ncbi.nlm.nih.gov/pubmed/22446172","Fraser et al. 2012"],["carnosine","1","anti-aging,cataracts","general health","compound","","1.17","6240","http://www.ncbi.nlm.nih.gov/pubmed/19487926","Babizhayev et al. 2009"]]},"diabetes":{"compound":[["benfotiamine (fat-soluble thiamin)","0.5","anti-aging,diabetes","diabetes,general health","compound","","0.44","1030","http://www.ncbi.nlm.nih.gov/pubmed/22446172","Fraser et al. 2012"],["fish oil / omega 3","0","Crohn's disease,asthma,diabetes","digestion,diabetes,general health","compound","","14.8","35600","http://www.cochrane.org/reviews/en/ab006320.html","Cochrane"],["L-carnitine","1.5","diabetes,impotence","diabetes,sex","compound","","8.99","17500","http://www.jacn.org/cgi/content/full/18/1/77","PubMed"],["resveratrol","0","cancer,diabetes,heart health,metabolism","cancer,diabetes,cardio","compound","OTW","6.9","35100","http://www.cancerletters.info/article/S0304-3835(08)00252-8/abstract","Cancer Letters"]],"plant / herb":[["fenugreek","0","cancer prevention,diabetes","cancer,diabetes","plant / herb","","4.22","9420","",""]]},"menopause":{"plant / herb":[["black cohosh","1","menopause","women","plant / herb","","3.09","5800","http://informahealthcare.com/doi/abs/10.1080/09513590400020922",""],["dong quai","0.5","menopause,breast cancer","women","plant / herb","","1.61","2810","http://www.ncbi.nlm.nih.gov/pubmed/16278617?dopt=Abstract","Lau et al. 2005"]],"mineral":[["boron","1","menopause","women","mineral","","6.03","119000","deadlink",""]]},"stress":{"plant / herb":[["black tea","2","stress","mental health","plant / herb","","1.54","14700","http://www.nlm.nih.gov/medlineplus/druginfo/natural/patient-black_tea.html",""]],"compound":[["GABA","2","stress,anxiety","mental health","compound","","8.2","184000","http://www.ncbi.nlm.nih.gov/pubmed/16971751","PubMed"]]},"cancer prevention":{"plant / herb":[["black tea","1","cancer prevention","cancer","plant / herb","","0.711","5800","http://www.nlm.nih.gov/medlineplus/druginfo/natural/patient-black_tea.html","MedlinePlus"],["fenugreek","0","cancer prevention,diabetes","cancer,diabetes","plant / herb","","4.22","9420","",""],["garlic ","2","cancer prevention","cancer","plant / herb","","5.29","20800","",""],["green tea","3","cancer prevention","cancer","plant / herb","","6.07","18700","http://www.cochrane.org/reviews/en/ab005004.html","Cochrane review"]]},"rheumatism":{"plant / herb":[["borage seed oil","1.5","rheumatism","musculoskeletal","plant / herb","","0.372","620","http://www.ncbi.nlm.nih.gov/pubmed/8214997?dopt=Abstract",""]]},"arthritis":{"enzyme":[["bromelain","2","arthritis","musculoskeletal","enzyme","","3.98","5900","http://www.ncbi.nlm.nih.gov/pubmed/15841258",""]],"compound":[["chrondroitin","0","arthritis","musculoskeletal","compound","","7.24","33100","",""],["glucos-amine","1","arthritis,joint pain","musculoskeletal","compound","","12.1","50700","http://www.ncbi.nlm.nih.gov/pubmed/20847017","PubMed"],["MSM","2","arthritis","musculoskeletal","compound","","0.955","1240","http://www.ncbi.nlm.nih.gov/pubmed/16309928","PubMed"]],"plant / herb":[["devil's claw","4","arthritis","musculoskeletal","plant / herb","","0.491","982","http://www.ncbi.nlm.nih.gov/pubmed/14669250",""],["lingzhi + san miao san","1","arthritis","musculoskeletal","plant / herb","","1.61","2700","http://www.ncbi.nlm.nih.gov/pubmed/17907228",""]],"other":[["egg shell membrane","4","joints,arthritis","general health","other","OTW","0.012","119","http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2697588/","Ruff et al. (2009)"],["krill oil","1","arthritis","musculoskeletal","other","","2.69","922","http://www.ncbi.nlm.nih.gov/pubmed/17353582","Deutsch 2007"]],"vitamin":[["vitamin B5","0","cholesterol,arthritis","cardio,musculoskeletal","vitamin","","0.0286","120","",""]]},"skin cancer":{"compound":[["caffeine","1","skin cancer","cancer","compound","","10.7","74200","http://cancerres.aacrjournals.org/content/72/13/3282","Song et al. 2012"]]},"osteoporosis (in postmenopausal women)":{"mineral":[["calcium","3.5","osteoporosis (in postmenopausal women)","musculoskeletal,women","mineral","","44.5","2010000","http://www.ncbi.nlm.nih.gov/pubmed/21289325","PubMed"]]},"colorectal cancer":{"mineral":[["calcium","3","colorectal cancer","cancer","mineral","","9.91","2010000","http://www.ncbi.nlm.nih.gov/pubmed/9887161",""]],"compound":[["fish oil / omega 3","3","colorectal cancer","cancer","compound","","15.6","32800","http://aje.oxfordjournals.org/cgi/content/full/166/2/181","American Journal of Epidemiology"]]},"breast cancer (in premenopausal women)":{"mineral":[["calcium + vit. D","4","breast cancer (in premenopausal women),cancer","cancer,women","mineral","","4.11","379000","http://www.ncbi.nlm.nih.gov/pubmed/17533208","PubMed"]]},"cataracts":{"compound":[["carnosine","1","anti-aging,cataracts","general health","compound","","1.17","6240","http://www.ncbi.nlm.nih.gov/pubmed/19487926","Babizhayev et al. 2009"]],"other":[["N-acetylcarnosine (topical application)","1","cataracts","general health","other","","0.709","31100","http://www.ncbi.nlm.nih.gov/pubmed/12001824","PubMed"]]},"viruses":{"plant / herb":[["cat's claw","0","cancer,viruses,immune system","cancer,infections","plant / herb","","1.07","1220","","PubMed"]]},"bowel disorders":{"plant / herb":[["chamomile","0","bowel disorders","digestion","plant / herb","","2.25","3950","",""]]},"autoimmune":{"plant / herb":[["chang shan (halofuginone)","0","autoimmune","general health","plant / herb","","0.024","1160","",""]]},"blood pressure":{"plant / herb":[["chocolate,dark","4","blood pressure","cardio","plant / herb","","14.3","11200","http://www.ncbi.nlm.nih.gov/pubmed/20584271","PubMed"],["garlic","6","blood pressure","cardio","plant / herb","","13.1","34600","http://www.ncbi.nlm.nih.gov/pubmed/18554422","PubMed"],["olive leaf extract","4","blood pressure,cholesterol","cardio","plant / herb","","1.76","1030","http://www.ncbi.nlm.nih.gov/pubmed/21036583","PubMed"],["spirulina","2","blood pressure,cholesterol","cardio","plant / herb","","10.2","14100","http://www.lipidworld.com/content/6/1/33",""]],"enzyme":[["CoQ10","4","blood pressure","cardio","enzyme","","1.98","6210","http://www.nature.com/jhh/journal/v21/n4/full/1002138a.html","Human Hypertension"]],"mineral":[["magnesium","3","blood pressure","cardio","mineral","","10.7","10800","http://ncp.sagepub.com/cgi/content/abstract/23/2/142","Nutrition in Clinical Practice"],["potassium","0","blood pressure","cardio","mineral","","12.2","770000","",""]],"other":[["probiotics","0","cholesterol,blood pressure","cardio","other","","0.825","12100","",""]]},"obesity":{"plant / herb":[["coconut oil","4","obesity","cardio,general health","plant / herb","","15.5","27900","http://onlinelibrary.wiley.com/o/cochrane/clcentral/articles/529/CN-00721529/frame.html",""]]},"alzheimer's disease":{"plant / herb":[["coffee","3","alzheimer's disease,dementia","mental health","plant / herb","","5.83","14500","","Santos et al 2010"]],"compound":[["colostrinin","4","alzheimer's disease","mental health","compound","OTW","0.0127","203","http://www.ncbi.nlm.nih.gov/pubmed?term=new%20insights%20colostrinin","Szaniszlo et al. 2009"]]},"dementia":{"plant / herb":[["coffee","3","alzheimer's disease,dementia","mental health","plant / herb","","5.83","14500","","Santos et al 2010"],["gingko biloba","1","dementia","mental health","plant / herb","","8.04","21500","http://www.ncbi.nlm.nih.gov/pubmed/20040554",""]],"compound":[["fish oil / omega 3","1","Alzheimer's,dementia","mental health","compound","","2.83","6760","http://www.ncbi.nlm.nih.gov/pubmed/17030655","PubMed"],["piracetam","1.5","memory,dementia","mental health","compound","","0.559","4260","",""]]},"migraine":{"enzyme":[["CoQ10","2","migraine","pain","enzyme","","1.47","6940","http://www.ncbi.nlm.nih.gov/pubmed/15728298","PubMed"]],"plant / herb":[["feverfew","2","migraine","pain","plant / herb","","1.4","5290","http://www.ncbi.nlm.nih.gov/pubmed/14973986","PubMed"]],"vitamin":[["vitamin B2","1","migraine","pain","vitamin","","2.39","2760","http://www.ncbi.nlm.nih.gov/pubmed/15257686","PubMed"]]},"heart disease":{"enzyme":[["CoQ10","1","heart disease","cardio","enzyme","","13.6","4370","http://www.aafp.org/afp/2005/0915/p1065.html","American Family Physician"]],"vitamin":[["niacin (vitamin B3)","5","heart disease","cardio","vitamin","","12.1","45900","http://www.ncbi.nlm.nih.gov/pubmed/20208032","PubMed"],["vitamin D","0","heart disease","cardio","vitamin","","5.76","12800","http://www.ncbi.nlm.nih.gov/pubmed/20816120","PubMed"],["vitamin K2","4","heart disease","cardio","vitamin","OTW","0.344","2070","http://www.ncbi.nlm.nih.gov/pubmed/20850029","Journal of Nutrition"]],"compound":[["omega 3: ALA","1","heart disease","cardio","compound","","0.945","7380","http://www.ncbi.nlm.nih.gov/pubmed/15890766?dopt=Abstract&holding=f1000,f1000m,isrctn","PubMed"],["poly-phenols","1","heart disease","cardio","compound","","5.23","61000","http://www.ncbi.nlm.nih.gov/pubmed/15640497","PubMed"],["ubiquinol","1","heart disease","cardio","compound","OTW","1.52","9190","http://www.ncbi.nlm.nih.gov/pubmed/19096107",""]],"plant / herb":[["red yeast rice","3","cholesterol,heart disease","cardio","plant / herb","OTW","2.2","1760","http://www.ajconline.org/article/S0002-9149(08)00353-6/abstract","American Journal of Cardiology"]]},"urinary tract infections":{"plant / herb":[["cranberry products","1","urinary tract infections","urinary","plant / herb","","8.74","8290","http://summaries.cochrane.org/CD001321/cranberries-for-preventing-urinary-tract-infections","Cochrane Review"]]},"cognition":{"compound":[["creatine","4","cognition","mental health","compound","","13.8","135000","http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1691485/?tool=pubmed","PubMed"]]},"tonsilitis":{"plant / herb":[["dandelion","1","tonsilitis","infections","plant / herb","","47.5","20800","",""]]},"memory in young men":{"compound":[["DHEA","1","memory in young men","mental health,men","compound","OTW","3.24","15000","http://www.ncbi.nlm.nih.gov/pubmed/16231168","PubMed"]]},"ageing":{"compound":[["DHEA","0","ageing","general health","compound","","2.31","8980","http://www.ncbi.nlm.nih.gov/pubmed/17050889","PubMed"]]},"breast cancer":{"plant / herb":[["dong quai","0.5","menopause,breast cancer","women","plant / herb","","1.61","2810","http://www.ncbi.nlm.nih.gov/pubmed/16278617?dopt=Abstract","Lau et al. 2005"],["flax seeds","1","breast cancer","cancer,women","plant / herb","","3.21","6690","http://clincancerres.aacrjournals.org/content/11/10/3828.abstract","Clinical Cancer Research"]]},"colds":{"plant / herb":[["echinacea","3","colds","infections","plant / herb","","8.86","15700","http://www.ncbi.nlm.nih.gov/pubmed/16437427","Cochrane Review"],["garlic ","2","colds","infections","plant / herb","","5.29","20800","","Cochrane review: Garlic for the common cold"]],"vitamin":[["vitamin C","2","colds","infections","vitamin","","65.2","291000","http://www.ncbi.nlm.nih.gov/pubmed/17636648","PubMed"]],"mineral":[["zinc","5","colds","infections","mineral","","1.85","10100","http://www.thecochranelibrary.com/details/file/1017735/CD001364.html","Cochrane Library"]]},"joints":{"other":[["egg shell membrane","4","joints,arthritis","general health","other","OTW","0.012","119","http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2697588/","Ruff et al. (2009)"]]},"lipid and antioxidant status":{"plant / herb":[["elderberry","1","lipid and antioxidant status","cardio","plant / herb","OTW","1.06","1230","http://www.ncbi.nlm.nih.gov/pubmed/14749743","PubMed"]]},"flu":{"plant / herb":[["elderberry","1","flu","infections","plant / herb","OTW","1.91","1050","http://www.ncbi.nlm.nih.gov/pubmed/19548290","PubMed"]],"vitamin":[["vitamin D","4","flu","infections","vitamin","","15.3","606000","http://www.ncbi.nlm.nih.gov/pubmed/20219962","Urashima et al. 2010"]]},"PMS":{"plant / herb":[["evening primrose oil","0","PMS","women","plant / herb","","3.82","7080","http://www.ncbi.nlm.nih.gov/pubmed/8721802","PubMed"],["St John's wort","3","depression,PMS","mental health,women","plant / herb","","6.55","13900","http://nccam.nih.gov/health/stjohnswort/sjw-and-depression.htm","NCCAM"]],"other":[["krill oil","1","PMS","women","other","","2.69","922","http://www.ncbi.nlm.nih.gov/pubmed/12777162","PubMed"]]},"cardiovascular disease":{"compound":[["fish oil / omega 3","2","cardiovascular disease","cardio","compound","","0.306","5480","http://www.nejm.org/doi/full/10.1056/NEJMoa1205409","New England Journal of Medicine"]]},"cancer symptoms":{"compound":[["fish oil / omega 3","4","cancer symptoms","cancer,pain,digestion","compound","","8.47","28500","http://www.ncbi.nlm.nih.gov/pubmed/17408522","PubMed"]]},"depression":{"compound":[["fish oil / omega 3","3.5","depression,mental illness","mental health","compound","","1.56","5340","http://www.ncbi.nlm.nih.gov/pmc/articles/PMC533861/","PubMed"],["SAM-e","3","depression","mental health","compound","","0.168","8900","http://www.ncbi.nlm.nih.gov/pubmed/19944301","Mischoulon,2009"],["tyrosine","4","alertness,wakefulness,memory,depression","mental health","compound","","9.15","851000","http://www.ncbi.nlm.nih.gov/pubmed/7794222","PubMed"]],"plant / herb":[["lavender","2","depression","mental health","plant / herb","","5.73","24100","http://www.ncbi.nlm.nih.gov/pubmed/12551734","PubMed"],["St John's wort","3","depression,PMS","mental health,women","plant / herb","","6.55","13900","http://nccam.nih.gov/health/stjohnswort/sjw-and-depression.htm","NCCAM"]],"vitamin":[["vitamin B8","3","OCD,panic disorder,depression","mental health","vitamin","OTW","0.127","341","http://www.ncbi.nlm.nih.gov/pubmed/8780431","PubMed"],["vitamin D","3","depression","mental health","vitamin","","37.5","572000","http://www.ncbi.nlm.nih.gov/pubmed?term=PMC3173027","Bertone-Johnson et al. 2011"],["vitamin D","1","depression,mood disorders","mental health","vitamin","","3.94","229000","http://www.ncbi.nlm.nih.gov/pubmed/16554952","PubMed"]]},"mental illness":{"compound":[["fish oil / omega 3","3.5","depression,mental illness","mental health","compound","","1.56","5340","http://www.ncbi.nlm.nih.gov/pmc/articles/PMC533861/","PubMed"]]},"child intelligence":{"compound":[["fish oil / omega 3","2","child intelligence","mental health,children","compound","","8.89","21900","http://www.ncbi.nlm.nih.gov/pubmed/20171055","PubMed"]]},"Crohn's disease":{"compound":[["fish oil / omega 3","0","Crohn's disease,asthma,diabetes","digestion,diabetes,general health","compound","","14.8","35600","http://www.cochrane.org/reviews/en/ab006320.html","Cochrane"]]},"asthma":{"compound":[["fish oil / omega 3","0","Crohn's disease,asthma,diabetes","digestion,diabetes,general health","compound","","14.8","35600","http://www.cochrane.org/reviews/en/ab006320.html","Cochrane"]]},"certain birth defects":{"vitamin":[["folic acid","3","certain birth defects","children","vitamin","","10.5","108000","http://onlinelibrary.wiley.com/o/cochrane/clsysrev/articles/CD007950/frame.html","Cochrane Review"]]},"anxiety":{"compound":[["GABA","2","stress,anxiety","mental health","compound","","8.2","184000","http://www.ncbi.nlm.nih.gov/pubmed/16971751","PubMed"]],"plant / herb":[["valerian","1","anxiety","mental health","plant / herb","OTW","5.79","9270","http://www.ncbi.nlm.nih.gov/pubmed/17054208",""]]},"cancer treatment":{"plant / herb":[["garlic","0.5","cancer treatment","cancer","plant / herb","","5.29","20800","http://jn.nutrition.org/cgi/content/full/136/3/816S",""]]},"nausea and vomiting":{"plant / herb":[["ginger","3","nausea and vomiting","digestion","plant / herb","","78.2","68600","http://www.medicine.ox.ac.uk/bandolier/booth/alternat/AT128.html","PubMed"]]},"cognitive performance":{"plant / herb":[["ginseng","2","cognitive performance","mental health","plant / herb","","24.1","35000","http://jop.sagepub.com/cgi/content/abstract/19/4/357",""]]},"joint pain":{"compound":[["glucos-amine","1","arthritis,joint pain","musculoskeletal","compound","","12.1","50700","http://www.ncbi.nlm.nih.gov/pubmed/20847017","PubMed"]]},"gastrointestinal disease in infants":{"compound":[["glutamine","0","gastrointestinal disease in infants","digestion,children","compound","","0.691","58500","",""]]},"morbidity and mortality in preterm infants":{"compound":[["glutamine","0","morbidity and mortality in preterm infants","children","compound","","0.518","25900","",""]]},"eye health":{"plant / herb":[["goji berry","1","eye health","general health","plant / herb","","7.06","2110","http://www.ncbi.nlm.nih.gov/pubmed/15604618",""]],"compound":[["lutein","1","eye health","general health","compound","","6.1","23600","http://www.ncbi.nlm.nih.gov/pubmed/11431456","PubMd"]]},"wound healing":{"plant / herb":[["grape seed extract","0","wound healing,swelling","pain","plant / herb","","3.21","5410","http://www.ncbi.nlm.nih.gov/pubmed/16546280","PubMed"]]},"swelling":{"plant / herb":[["grape seed extract","0","wound healing,swelling","pain","plant / herb","","3.21","5410","http://www.ncbi.nlm.nih.gov/pubmed/16546280","PubMed"]]},"antibiotic":{"plant / herb":[["grapefruit seed extract","0","antibiotic,antifungal","infections","plant / herb","","1.1","1010","","PubMed"]]},"antifungal":{"plant / herb":[["grapefruit seed extract","0","antibiotic,antifungal","infections","plant / herb","","1.1","1010","","PubMed"]]},"cholesterol":{"plant / herb":[["green tea","2","cholesterol","cardio","plant / herb","","11.7","40200","http://www.ncbi.nlm.nih.gov/pubmed/11897173","PubMed"],["olive leaf extract","4","blood pressure,cholesterol","cardio","plant / herb","","1.76","1030","http://www.ncbi.nlm.nih.gov/pubmed/21036583","PubMed"],["red yeast rice","3","cholesterol,heart disease","cardio","plant / herb","OTW","2.2","1760","http://www.ajconline.org/article/S0002-9149(08)00353-6/abstract","American Journal of Cardiology"],["spirulina","2","blood pressure,cholesterol","cardio","plant / herb","","10.2","14100","http://www.lipidworld.com/content/6/1/33",""]],"other":[["probiotics","0","cholesterol,blood pressure","cardio","other","","0.825","12100","",""]],"compound":[["taurine","1.5","weight loss,cholesterol","general health,cardio","compound","","1.17","6010","http://www.springerlink.com/content/4gnpvkgpg7ff7qc4/",""]],"vitamin":[["vitamin B5","0","cholesterol,arthritis","cardio,musculoskeletal","vitamin","","0.0286","120","",""]]},"chronic venous insufficiency":{"plant / herb":[["horse chestnut seed extract","2","chronic venous insufficiency","cardio","plant / herb","OTW","0.347","341","http://www.ncbi.nlm.nih.gov/pubmed/16437450","PubMed"]]},"arthritis (only when injected)":{"compound":[["hyaluronic acid","1","arthritis (only when injected)","musculoskeletal","compound","","7.16","42600","http://www.ncbi.nlm.nih.gov/pubmed/14679274","PubMed"]]},"general health":{"other":[["iodine","1.5","general health","general health","other","","18.9","510000","http://www.ncbi.nlm.nih.gov/pubmed/18590348","PubMed"],["royal jelly","0","general health","general health","other","","5.76","4800","",""]],"vitamin":[["vitamin D","5","general health,all-cause mortality","general health","vitamin","","20.4","248000","http://ebm.bmj.com/content/13/2/47.full","PubMed"]]},"child development (when not anaemic)":{"mineral":[["iron","2","child development (when not anaemic)","children,mental health,general health","mineral","","5.53","544000","http://www.ncbi.nlm.nih.gov/pubmed/20410098","PubMed"]]},"exercise performance":{"compound":[["L-arginine","1.5","exercise performance","general health","compound","","6.23","116000","http://jap.physiology.org/cgi/content/abstract/japplphysiol.00503.2010v1","Journal of Applied Psysiology"]]},"impotence":{"compound":[["L-carnitine","1.5","diabetes,impotence","diabetes,sex","compound","","8.99","17500","http://www.jacn.org/cgi/content/full/18/1/77","PubMed"]]},"herpes":{"compound":[["L-lysine","2","herpes","sex,infections","compound","OTW","3.05","97300"," http://www.ncbi.nlm.nih.gov/pubmed/6435961","PubMed"]]},"sleep":{"plant / herb":[["lavender","0","sleep,relaxation","mental health","plant / herb","","19.7","33600","",""]]},"relaxation":{"plant / herb":[["lavender","0","sleep,relaxation","mental health","plant / herb","","19.7","33600","",""]]},"protein synthesis":{"compound":[["leucine","3","protein synthesis","general health","compound","","4.52","224000","http://www.ncbi.nlm.nih.gov/pubmed/21775557","Pasiakos et al. 2011"]]},"dyspepsia":{"plant / herb":[["licorice root","3","dyspepsia","digestion","plant / herb","","1.6","4140","http://www.ncbi.nlm.nih.gov/pubmed/11505331","PubMed"]]},"prostate cancer":{"compound":[["lycopene","0","prostate cancer","cancer,men","compound","","4.73","24800","http://www.ncbi.nlm.nih.gov/pubmed/16434593","PubMed"]],"vitamin":[["Vitamin K2","1","prostate cancer","cancer,men","vitamin","OTW","0.252","2850","http://www.ajcn.org/cgi/content/abstract/87/4/985","American Journal of Clinical Nutrition"]]},"child ADHD":{"vitamin":[["magnesium + vitamin B6","3","child ADHD","mental health,children","vitamin","","1.78","7410","http://www.ncbi.nlm.nih.gov/pubmed/16846100","PubMed"]],"compound":[["omega 3","2","child ADHD","mental health,children","compound","","2.73","4170","http://www.ncbi.nlm.nih.gov/pubmed/17435458","PubMed"]]},"insomnia in the elderly":{"compound":[["melatonin","4","insomnia in the elderly","mental health","compound","","3.1","14800","http://www.ncbi.nlm.nih.gov/pubmed/18036082","PubMed"]]},"hepatitis":{"plant / herb":[["milk thistle","2","hepatitis","infections","plant / herb","","1.09","2900","http://journals.lww.com/jcge/Abstract/2008/09000/Silybin_Treatment_is_Associated_With_Reduction_in.13.aspx",""]]},"mental health":{"other":[["N-acetyl cysteine (NAC)","4","mental health,addiction","mental health","other","OTW","0.127","106","http://www.ncbi.nlm.nih.gov/pubmed/18534556","Berk et al. 2008"]]},"addiction":{"other":[["N-acetyl cysteine (NAC)","4","mental health,addiction","mental health","other","OTW","0.127","106","http://www.ncbi.nlm.nih.gov/pubmed/18534556","Berk et al. 2008"]]},"insulin control":{"compound":[["Na-R-ALA","0","insulin control","general health","compound","","0.043","6","",""]]},"prostate-related urinary problems":{"plant / herb":[["nettles","4","prostate-related urinary problems","urinary,men","plant / herb","OTW","5.02","24200","http://www.ncbi.nlm.nih.gov/pubmed/16635963","PubMed"],["saw palmetto","0","prostate-related urinary problems","urinary,men","plant / herb","","5.57","14500","http://www.ncbi.nlm.nih.gov/pubmed/19370565","Cochrane Review"]]},"heart health":{"compound":[["omega 6","4","heart health","cardio","compound","","1.82","16600","http://circ.ahajournals.org/cgi/reprint/CIRCULATIONAHA.108.191627","American Heart Association"],["resveratrol","0","cancer,diabetes,heart health,metabolism","cancer,diabetes,cardio","compound","OTW","6.9","35100","http://www.cancerletters.info/article/S0304-3835(08)00252-8/abstract","Cancer Letters"]]},"decongestant":{"plant / herb":[["pau d’arco","0","decongestant","general health","plant / herb","","0.971","1000","",""]]},"IBS":{"plant / herb":[["peppermint oil","4","IBS","digestion","plant / herb","","2.1","8410","http://www.bmj.com/cgi/content/full/337/nov13_2/a2313","British Medical Journal"]],"other":[["probiotics","3","IBS","digestion","other","","3.32","21600","http://www.ncbi.nlm.nih.gov/pubmed/19277023","PubMed"]]},"memory":{"compound":[["piracetam","1.5","memory,dementia","mental health","compound","","0.559","4260","",""],["tyrosine","4","alertness,wakefulness,memory,depression","mental health","compound","","9.15","851000","http://www.ncbi.nlm.nih.gov/pubmed/7794222","PubMed"]]},"diarrhoea":{"other":[["probiotics","3","diarrhoea,gastrointenstinal and respiratory infections","digestion,infections","other","","3.83","13900","http://www.ncbi.nlm.nih.gov/pubmed/20107143","PubMed"]]},"gastrointenstinal and respiratory infections":{"other":[["probiotics","3","diarrhoea,gastrointenstinal and respiratory infections","digestion,infections","other","","3.83","13900","http://www.ncbi.nlm.nih.gov/pubmed/20107143","PubMed"]]},"diarrhoea related to antibiotic use":{"other":[["probiotics","5","diarrhoea related to antibiotic use","digestion,infections","other","","3.83","13900","","Hempel et al 2012"]]},"athletic performance":{"other":[["probiotics","1","athletic performance","general health","other","","1.28","3860","http://www.ncbi.nlm.nih.gov/pubmed/17618005","PubMed"]],"compound":[["quercetin","1","athletic performance","general health","compound","","3.68","42000","http://journals.lww.com/acsm-msse/Abstract/2010/02000/Quercetin_s_Influence_on_Exercise_Performance_and.15.aspx",""]]},"metabolism":{"compound":[["resveratrol","0","cancer,diabetes,heart health,metabolism","cancer,diabetes,cardio","compound","OTW","6.9","35100","http://www.cancerletters.info/article/S0304-3835(08)00252-8/abstract","Cancer Letters"],["TMG (trimethylglycine)","1","metabolism","general health","compound","","0.225","1280","http://www.ncbi.nlm.nih.gov/pubmed/12399266","Schwab 2002"]]},"fatigue":{"plant / herb":[["rhodiola rosea L.","4","fatigue","mental health,general health","plant / herb","","0.263","600","http://www.ncbi.nlm.nih.gov/pubmed/19016404","PubMed"]]},"liver disease":{"compound":[["SAM-e","0","liver disease","general health","compound","","0.168","8900","",""]]},"sore throat":{"plant / herb":[["slippery elm","0","sore throat","infections","plant / herb","","1.36","3350","",""]]},"kidney cancer in men":{"other":[["sunlight","3","kidney cancer in men","cancer,men","other","OTW","0.563","849","http://www3.interscience.wiley.com/journal/123313834/abstract?CRETRY=1&SRETRY=0","Cancer Journal"]]},"bipolar disorder and alcholism":{"compound":[["taurine","0.5","bipolar disorder and alcholism","mental health","compound","","0.199","4300","http://www.ncbi.nlm.nih.gov/pubmed/22329472","Tolliver et al. 2012"]]},"depression in women":{"compound":[["tryptophan and 5-HTP","1","depression in women","mental health,women","compound","","6.45","224000","http://www.ncbi.nlm.nih.gov/pubmed/16767422","PubMed"]]},"peptic ulcer":{"plant / herb":[["turmeric (curcumin)","1","peptic ulcer","digestion","plant / herb","OTW","0.893","5030","http://www.ncbi.nlm.nih.gov/pubmed/20438867","PubMed"]]},"alertness":{"compound":[["tyrosine","4","alertness,wakefulness,memory,depression","mental health","compound","","9.15","851000","http://www.ncbi.nlm.nih.gov/pubmed/7794222","PubMed"]]},"wakefulness":{"compound":[["tyrosine","4","alertness,wakefulness,memory,depression","mental health","compound","","9.15","851000","http://www.ncbi.nlm.nih.gov/pubmed/7794222","PubMed"]]},"insomnia":{"plant / herb":[["valerian","3","insomnia","mental health","plant / herb","","3.25","4730","http://www.ncbi.nlm.nih.gov/pubmed/17145239","PubMed"]]},"birth defects":{"vitamin":[["vitamin A: retinol","0","birth defects","children","vitamin","","2.91","30300","http://www.ncbi.nlm.nih.gov/pubmed/9431575","PubMed"]]},"cankersores":{"vitamin":[["vitamin B12","4","cankersores","infections","vitamin","OTW","3","13200","http://www.jabfm.org/content/22/1/9.abstract","Volkov et al. 2009"]]},"OCD":{"vitamin":[["vitamin B8","3","OCD,panic disorder,depression","mental health","vitamin","OTW","0.127","341","http://www.ncbi.nlm.nih.gov/pubmed/8780431","PubMed"]]},"panic disorder":{"vitamin":[["vitamin B8","3","OCD,panic disorder,depression","mental health","vitamin","OTW","0.127","341","http://www.ncbi.nlm.nih.gov/pubmed/8780431","PubMed"]]},"all-cause mortality":{"vitamin":[["vitamin D","5","general health,all-cause mortality","general health","vitamin","","20.4","248000","http://ebm.bmj.com/content/13/2/47.full","PubMed"]]},"bone health":{"vitamin":[["vitamin D","4","bone health","musculoskeletal","vitamin","","8.68","248000","http://www.ncbi.nlm.nih.gov/pubmed/18689393","PubMed"]]},"mood disorders":{"vitamin":[["vitamin D","1","depression,mood disorders","mental health","vitamin","","3.94","229000","http://www.ncbi.nlm.nih.gov/pubmed/16554952","PubMed"]]},"osteoporosis":{"vitamin":[["vitamin K2","3","osteoporosis","musculoskeletal","vitamin","","0.277","4370","http://www.ncbi.nlm.nih.gov/pubmed/10227010","Maturitas"]]},"teeth":{"compound":[["xylitol","1","teeth","general health","compound","","3.14","18300","http://www.ncbi.nlm.nih.gov/pubmed/15153702","PubMed"]]}};

// maps from supplement types to hex colors
var typeColors = {"plant / herb": "#648C69", "compound": "#B5B06B", "mineral": "#8C6E96", "enzyme": "#966F6E", "mineral": "#787878", "vitamin": "#B56B84", "other": "#6B85B5"};
var typeHighlights = {"plant / herb": "#7FB385", "compound": "#D4CE7D", "mineral": "#B28CBF", "enzyme": "#C4918F", "mineral": "#B3B3B3", "vitamin": "#E084A3", "other": "#83A3DE"};

var evidenceScale = {"0": "None", "1": "Very slight", "2": "Slight", "3": "Conflicting", "4": "Promising", "5": "Strong", "6": "Very strong"};

/* Sets up the start screen to display health categories. */
function renderStartScreen() {
  var leftOffset = 200;
  var topOffset = 300;
  var canvas = d3.select("#canvas")
    .append("svg")
    .attr("class", "categoryGraph")
    .attr("width", "100%")
    .attr("height", 800);

  var nodes = Object.keys(categories);

  var healthCategories = canvas.selectAll("rect.node")
    .data(nodes)
    .enter().append("g")
    .attr("transform", function(d, i) {
      return "translate(" + (Math.floor(i % 4) * 300 + leftOffset) + ", " + (Math.floor(i / 4) * 150 + topOffset) + ")";
    })
    .attr("class", "node")
    .attr("x", function(d, i) { return Math.floor(i % 4) * 300 + leftOffset; })
    .attr("y", function(d, i) { return Math.floor(i / 4) * 150 + topOffset; })
    .attr("category", function(d) { return d; });

  healthCategories.append("svg:rect")
    .attr("rx", "30px")
    .attr("ry", "30px")
    .attr("width", 150)
    .attr("height", 50);

  var leftOffsetText = 76;
  var topOffsetText = 31;

  healthCategories.append("text")
    .attr("x", leftOffsetText)
    .attr("y", topOffsetText)
    .text(function(d) { return d; });

  $(".node").click(function() {
    displayConditions($(this));
  });
}


/* If a condition graph exists, remove it */
function removeConditionGraph() {
  $(".conditionGraph").remove();
  $(".node").fadeTo(200, 1);
}


function displayConditions(cat) {
  $(".conditionGraph").hide();
  $(".node").not(cat).fadeTo(200, .3);
  $(this).css("opacity", 1);

  var category = cat.attr("category");

  var conds = categories[category];

  var categoryX = parseFloat($(".node[category=\"" + category + "\"]").attr("x"));
  var categoryY = parseFloat($(".node[category=\"" + category + "\"]").attr("y"));

  var nodes = [{"condition": category, "x": categoryX, "y": categoryY, "fixed": true}];

  for (var i = 0; i < conds.length; ++i) {
    nodes.push({"condition": conds[i]});
  }
  
  var links = [];
  for (var i = 1; i < nodes.length; ++i) {
    links.push({"source": 0, "target": i});
  }

  var force = d3.layout.force()
    .charge(-1200)
    .linkDistance(function() { return Math.random() * 220 + 100})
    .linkStrength(1)
    .gravity(0.05)
    .size([1000, 1000]);

  var graphSvg = d3.select("#canvas").append("svg")
    .attr("width", 1000)
    .attr("height", 1000)
    .attr("class", "conditionGraph")
    .attr("margin-left", -500 + categoryX)
    .attr("margin-top", -500 + categoryY);

  force
    .nodes(nodes)
    .links(links)
    .start();

  var link = graphSvg.selectAll(".link")
    .data(links)
    .enter().append("line")
    .attr("class", "link");

  var node = graphSvg.selectAll(".condNode")
    .data(nodes)
    .enter().append("g")
    .attr("class", "condNode")
    .attr("condition", function(d) { return d.condition; });

  d3.select(".condNode")
    .attr("class", "condNode category")
    .attr("category", category);

  var condWidth = 150;
  var condHeight = 50;

  node.append("rect")
    .attr("class", "condition")
    .attr("width", condWidth)
    .attr("height", condHeight)
    .attr("category", category)
    .attr("rx", "30px")
    .attr("ry", "30px");

  var leftOffsetText = condWidth / 2;
  var topOffsetText = condHeight / 2 + 6;

  node.append("text")
    .attr("x", leftOffsetText)
    .attr("y", topOffsetText)
    .attr("category", category)
    .text(function(d) { return d.condition; });

  d3.selectAll(".condNode").each(function(d, i) {
    var rect = this.childNodes[0];
    var text = this.childNodes[1];

    var textWidth = text.getBBox().width;
    var rectWidth = textWidth + 40;
    if (textWidth > condWidth - 40) {
      d3.select(rect).attr("width", rectWidth);
      d3.select(text).attr("x", (rectWidth / 2));
    }
  });

  force.on("tick", function() {
    link.attr("x1", function(d) { return parseFloat(d.source.x) + condWidth / 2; })
        .attr("y1", function(d) { return parseFloat(d.source.y) + condHeight / 2; })
        .attr("x2", function(d) { return parseFloat(d.target.x) + condWidth / 2; })
        .attr("y2", function(d) { return parseFloat(d.target.y) + condHeight / 2; });

    node.attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return d.y; });

    node.attr("transform", function(d) {
        return "translate(" + d.x + ", " + d.y + ")";
    });
  });

  $(".conditionGraph").click(function(e) {
    removeConditionGraph();
  });

  $(".condNode").click(function(e) {
    var condition = $(this).attr("condition");
    e.stopPropagation();  // to prevent svg disappearing
    // Do not make title node clickable
    if (!$(this).hasClass("category") && !$(this).attr("category")) {
      displaySupplements(condition);
    } else {
      removeConditionGraph();
    }
  });
}

function displaySupplements(condition) {
  $(".categoryGraph").fadeOut();
  $(".conditionGraph").fadeOut();
  $(".conditionGraph").unbind("click");
  $(".condNode").unbind("click");
  $(".back").show();
  $(".intro").text("Supplements used for " + condition);

  var typesToSupplements = conditions[condition];
  var i = 0;

  var len = Object.keys(typesToSupplements).length;

  for (type in typesToSupplements) {
    drawTypeGraph(condition, type, i++, len);
  }
}

function drawTypeGraph(condition, type, index, len) {
  var x = 375;
  var y = 200;

  if (len == 2) {
    if (index == 0) {
      x = 250;
    } else {
      x = 750;
    }
  }

  if (len > 2) {
    x = index % 3 * 500 + 125;
    y = Math.floor(index / 3) * 400 + 200;
  }

  var supplements = conditions[condition][type];

  var nodes = [{"supplement": [type.toUpperCase(), 6], "x": x, "y": y, "fixed": true}];
  var links = [];

  for (var i = 0; i < supplements.length; ++i) {
    nodes.push({"supplement": supplements[i]});
    links.push({"source": 0, "target": (i + 1)});
  }

  var width = 1500,
    height = 1000;

  var force = d3.layout.force()
    .charge(-1200)
    .linkDistance(function() { return Math.random() * 220 + 100})
    .linkStrength(1)
    .gravity(0.05)
    .alpha(.1)
    .size([width, height]);


  var graphSvg;

  if ($(".typeGraph").length > 0) {
    graphSvg = d3.select(".typeGraph");
  } else {
    graphSvg = d3.select("#canvas").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "typeGraph")
    .attr("type", type)
    .style("left", x)
    .style("top", y);
  }
   

  force
    .nodes(nodes)
    .links(links)
    .start();

  var link = graphSvg.selectAll(".link" + index)
    .data(links)
    .enter().append("line")
    .attr("class", "link" + index);

  var node = graphSvg.selectAll(".suppNode" + index)
    .data(nodes)
    .enter().append("g")
    .attr("class", "suppNode" + index)
    .attr("supplement", function(d) { return d.supplement[0]; });

  d3.select(".suppNode" + index)
    .attr("class", "titleNode suppNode" + index)
    .attr("titleNode", true)
    .attr("transform", "translate(" + x + ", " + y + ")");

  var suppWidth = 150;
  var suppHeight = 50;

  node.append("circle")
    .attr("class", "supplement")
    .attr("r", function(d, i) { return 30 + (d["supplement"][1] * 10)})
    .style("fill", typeColors[type]);

  node.append("text")
    .attr("y", function(d) { return parseInt(d["supplement"][1]) + 3; })
    .style("font-size", function(d) { return parseInt(d["supplement"][1]) + 10; })
    .text(function(d) { return d.supplement[0]; });  

  force.on("tick", function() {
    link.attr("x1", function(d) { return parseFloat(d.source.x)})
        .attr("y1", function(d) { return parseFloat(d.source.y)})
        .attr("x2", function(d) { return parseFloat(d.target.x)})
        .attr("y2", function(d) { return parseFloat(d.target.y)});

    node.attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return d.y; });

    node.attr("transform", function(d) {
        return "translate(" + d.x + ", " + d.y + ")";
    });
  });
  addNodeHoverHandlers(index);
}

function addNodeHoverHandlers(index) {
  $(".suppNode" + index).hover(function() {
    if (!d3.select(this).attr("titleNode")) {
      d3.select(this.childNodes[0])
        .transition()
        .duration(500)
        .attr("r", 110);

      d3.select(this.childNodes[1])
        .transition()
        .duration(500)
        .style("font-size", 16);

      var desc = d3.select(this).append("text")
        .attr("class", "desc")
        .style("font-size", 2);

      desc.attr("y", function(d) { return parseInt(d["supplement"][1]) + 28; })
        .text(function(d) { return "Scientific evidence: " + evidenceScale[Math.floor(d.supplement[1])] })
        .transition().duration(500)
        .style("font-size", 12);

        //console.log(d3.select(this).datum());
      // If there is a study associated with this supplement, add text that says you can click through to it
      if (d3.select(this).datum().supplement[8] !== "") {
        var studyLink = d3.select(this).append("text")
          .attr("class", "desc")
          .style("font-size", 2);

        studyLink.attr("y", function(d) { return parseInt(d["supplement"][1]) + 48; })
          .text(function(d) { return "Click to view study" })
          .transition().duration(500)
          .style("font-size", 12);      
      }
    }
  }, function() {
      $(".desc").remove();
      d3.select(this.childNodes[0])
        .transition()
        .duration(500)
        .attr("r", function(d, i) { return 30 + (d["supplement"][1] * 10)});   

      d3.select(this.childNodes[1])
        .transition()
        .duration(500)
        .style("font-size", function(d) { return parseInt(d["supplement"][1]) + 10; });
  });

  $("a .suppNode" + index).click(function() {
    var link = d3.select(this).datum().supplement[8];
    if (link !== "") {
      window.open(link, "_blank");      
    }
  });
}


function addBackClickHandler() {
  $(".back").click(function() {
    $(".back").hide();
    $(".typeGraph").remove();
    $(".categoryGraph").show();
    removeConditionGraph();
    $(".intro").text("Want to boost your health? Pick a health category to address.");
  });
}

renderStartScreen();
addBackClickHandler();
