var supplements = [
["aloe vera","3","diabetes","diabetes","plant / herb","","21.4","12400","http://www.ncbi.nlm.nih.gov/pubmed/10885091","PubMed"],
["aloe vera","0","digestive aid,burns,cuts","general health","plant / herb","","21.4","16800","","Cochrane Review"],
["andro-graphis","2","respiratory tract infections","infections","plant / herb","OTW","0.644","3630","http://www.ncbi.nlm.nih.gov/pubmed/14748896",""],
["anti-oxidants","4","infertility in men","sex,men,children","compound","","28","305000","http://www.biomedsearch.com/nih/systematic-review-effect-oral-antioxidants/20378409.html","Reproductive Biomedicine Online     "],
["anti-oxidants","0","mortality","general health","compound","","1.03","12100","http://jama.ama-assn.org/content/297/8/842.full.pdf","Cochrane Review"],
["asta-xanthin","1","oxidative stress","general health","compound","OTW","1.65","8060","http://www.ncbi.nlm.nih.gov/pubmed/19656058","PubMed"],
["astragalus","0.5","dna damage,immune system","general health","plant / herb","OTW","0.385","19900","http://www.ncbi.nlm.nih.gov/pubmed/15035888","Block,Mead (2003)"],
["B vitamins","0.5","Alzheimer's","mental health","vitamin","","7.62","26400","http://www.ncbi.nlm.nih.gov/pubmed/18854539","PubMed"],
["bee pollen","0.5","weight loss,cancer","general health,cancer","other","","3.77","4160","http://www.ncbi.nlm.nih.gov/pubmed/20598400","European Journal of Medicinal Chemistry"],
["benfotiamine (fat-soluble thiamin)","0.5","anti-aging,diabetes","diabetes,general health","compound","","0.44","1030","http://www.ncbi.nlm.nih.gov/pubmed/22446172","Fraser et al. 2012"],
["beta-glucans","0","cancer","cancer","compound","OTW","0.484","3280","http://www.ncbi.nlm.nih.gov/pubmed/19515245","PubMed"],
["bitter melon","0","diabetes","diabetes","plant / herb","","1.3","2890","","PubMed"],
["black cohosh","1","menopause","women","plant / herb","","3.09","5800","http://informahealthcare.com/doi/abs/10.1080/09513590400020922",""],
["black tea","2","stress","mental health","plant / herb","","1.54","14700","http://www.nlm.nih.gov/medlineplus/druginfo/natural/patient-black_tea.html",""],
["black tea","1","cancer prevention","cancer","plant / herb","","0.711","5800","http://www.nlm.nih.gov/medlineplus/druginfo/natural/patient-black_tea.html","MedlinePlus"],
["borage seed oil","1.5","rheumatism","musculoskeletal","plant / herb","","0.372","620","http://www.ncbi.nlm.nih.gov/pubmed/8214997?dopt=Abstract",""],
["boron","1","menopause","women","mineral","","6.03","119000","deadlink",""],
["bromelain","2","arthritis","musculoskeletal","enzyme","","3.98","5900","http://www.ncbi.nlm.nih.gov/pubmed/15841258",""],
["caffeine","1","skin cancer","cancer","compound","","10.7","74200","http://cancerres.aacrjournals.org/content/72/13/3282","Song et al. 2012"],
["calcium","3.5","osteoporosis (in postmenopausal women)","musculoskeletal,women","mineral","","44.5","2010000","http://www.ncbi.nlm.nih.gov/pubmed/21289325","PubMed"],
["calcium","3","colorectal cancer","cancer","mineral","","9.91","2010000","http://www.ncbi.nlm.nih.gov/pubmed/9887161",""],
["calcium + vit. D","4","breast cancer (in premenopausal women),cancer","cancer,women","mineral","","4.11","379000","http://www.ncbi.nlm.nih.gov/pubmed/17533208","PubMed"],
["capsaicin","0","cancer","cancer","plant / herb","","3.08","27100","","no human trials"],
["carnosine","1","anti-aging,cataracts","general health","compound","","1.17","6240","http://www.ncbi.nlm.nih.gov/pubmed/19487926","Babizhayev et al. 2009"],
["cat's claw","0","cancer,viruses,immune system","cancer,infections","plant / herb","","1.07","1220","","PubMed"],
["chamomile","0","bowel disorders","digestion","plant / herb","","2.25","3950","",""],
["chang shan (halofuginone)","0","autoimmune","general health","plant / herb","","0.024","1160","",""],
["chocolate,dark","4","blood pressure","cardio","plant / herb","","14.3","11200","http://www.ncbi.nlm.nih.gov/pubmed/20584271","PubMed"],
["chromium","1","diabetes","diabetes","mineral","","2.75","25500","http://www.ajcn.org/content/76/1/148.full",""],
["chrondroitin","0","arthritis","musculoskeletal","compound","","7.24","33100","",""],
["cinnamon","2","diabetes","diabetes","plant / herb","","35.3","4100","http://care.diabetesjournals.org/content/31/1/41.long",""],
["coconut oil","4","obesity","cardio,general health","plant / herb","","15.5","27900","http://onlinelibrary.wiley.com/o/cochrane/clcentral/articles/529/CN-00721529/frame.html",""],
["coffee","3","alzheimer's disease,dementia","mental health","plant / herb","","5.83","14500","","Santos et al 2010"],
["colostrinin","4","alzheimer's disease","mental health","compound","OTW","0.0127","203","http://www.ncbi.nlm.nih.gov/pubmed?term=new%20insights%20colostrinin","Szaniszlo et al. 2009"],
["CoQ10","4","blood pressure","cardio","enzyme","","1.98","6210","http://www.nature.com/jhh/journal/v21/n4/full/1002138a.html","Human Hypertension"],
["CoQ10","2","migraine","pain","enzyme","","1.47","6940","http://www.ncbi.nlm.nih.gov/pubmed/15728298","PubMed"],
["CoQ10","1","heart disease","cardio","enzyme","","13.6","4370","http://www.aafp.org/afp/2005/0915/p1065.html","American Family Physician"],
["CoQ10","0","diabetes","diabetes","enzyme","","0.784","833","http://www.aafp.org/afp/2005/0915/p1065.html","American Family Physician"],
["cranberry products","1","urinary tract infections","urinary","plant / herb","","8.74","8290","http://summaries.cochrane.org/CD001321/cranberries-for-preventing-urinary-tract-infections","Cochrane Review"],
["creatine","4","cognition","mental health","compound","","13.8","135000","http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1691485/?tool=pubmed","PubMed"],
["dandelion","1","tonsilitis","infections","plant / herb","","47.5","20800","",""],
["devil's claw","4","arthritis","musculoskeletal","plant / herb","","0.491","982","http://www.ncbi.nlm.nih.gov/pubmed/14669250",""],
["DHEA","1","memory in young men","mental health,men","compound","OTW","3.24","15000","http://www.ncbi.nlm.nih.gov/pubmed/16231168","PubMed"],
["DHEA","0","ageing","general health","compound","","2.31","8980","http://www.ncbi.nlm.nih.gov/pubmed/17050889","PubMed"],
["dong quai","0.5","menopause,breast cancer","women","plant / herb","","1.61","2810","http://www.ncbi.nlm.nih.gov/pubmed/16278617?dopt=Abstract","Lau et al. 2005"],
["echinacea","3","colds","infections","plant / herb","","8.86","15700","http://www.ncbi.nlm.nih.gov/pubmed/16437427","Cochrane Review"],
["egg shell membrane","4","joints,arthritis","general health","other","OTW","0.012","119","http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2697588/","Ruff et al. (2009)"],
["elderberry","1","lipid and antioxidant status","cardio","plant / herb","OTW","1.06","1230","http://www.ncbi.nlm.nih.gov/pubmed/14749743","PubMed"],
["elderberry","1","flu","infections","plant / herb","OTW","1.91","1050","http://www.ncbi.nlm.nih.gov/pubmed/19548290","PubMed"],
["evening primrose oil","0","PMS","women","plant / herb","","3.82","7080","http://www.ncbi.nlm.nih.gov/pubmed/8721802","PubMed"],
["fenugreek","0","cancer prevention,diabetes","cancer,diabetes","plant / herb","","4.22","9420","",""],
["feverfew","2","migraine","pain","plant / herb","","1.4","5290","http://www.ncbi.nlm.nih.gov/pubmed/14973986","PubMed"],
["fish oil / omega 3","2","cardiovascular disease","cardio","compound","","0.306","5480","http://www.nejm.org/doi/full/10.1056/NEJMoa1205409","New England Journal of Medicine"],
["fish oil / omega 3","3","colorectal cancer","cancer","compound","","15.6","32800","http://aje.oxfordjournals.org/cgi/content/full/166/2/181","American Journal of Epidemiology"],
["fish oil / omega 3","4","cancer symptoms","cancer,pain,digestion","compound","","8.47","28500","http://www.ncbi.nlm.nih.gov/pubmed/17408522","PubMed"],
["fish oil / omega 3","3.5","depression,mental illness","mental health","compound","","1.56","5340","http://www.ncbi.nlm.nih.gov/pmc/articles/PMC533861/","PubMed"],
["fish oil / omega 3","2","child intelligence","mental health,children","compound","","8.89","21900","http://www.ncbi.nlm.nih.gov/pubmed/20171055","PubMed"],
["fish oil / omega 3","1","Alzheimer's,dementia","mental health","compound","","2.83","6760","http://www.ncbi.nlm.nih.gov/pubmed/17030655","PubMed"],
["fish oil / omega 3","0","Crohn's disease,asthma,diabetes","digestion,diabetes,general health","compound","","14.8","35600","http://www.cochrane.org/reviews/en/ab006320.html","Cochrane"],
["flax seeds","1","breast cancer","cancer,women","plant / herb","","3.21","6690","http://clincancerres.aacrjournals.org/content/11/10/3828.abstract","Clinical Cancer Research"],
["folic acid","3","certain birth defects","children","vitamin","","10.5","108000","http://onlinelibrary.wiley.com/o/cochrane/clsysrev/articles/CD007950/frame.html","Cochrane Review"],
["GABA","2","stress,anxiety","mental health","compound","","8.2","184000","http://www.ncbi.nlm.nih.gov/pubmed/16971751","PubMed"],
["garlic","6","blood pressure","cardio","plant / herb","","13.1","34600","http://www.ncbi.nlm.nih.gov/pubmed/18554422","PubMed"],
["garlic","0.5","cancer treatment","cancer","plant / herb","","5.29","20800","http://jn.nutrition.org/cgi/content/full/136/3/816S",""],
["garlic ","2","cancer prevention","cancer","plant / herb","","5.29","20800","",""],
["garlic ","2","colds","infections","plant / herb","","5.29","20800","","Cochrane review: Garlic for the common cold"],
["ginger","3","nausea and vomiting","digestion","plant / herb","","78.2","68600","http://www.medicine.ox.ac.uk/bandolier/booth/alternat/AT128.html","PubMed"],
["gingko biloba","1","dementia","mental health","plant / herb","","8.04","21500","http://www.ncbi.nlm.nih.gov/pubmed/20040554",""],
["ginseng","2","cognitive performance","mental health","plant / herb","","24.1","35000","http://jop.sagepub.com/cgi/content/abstract/19/4/357",""],
["glucos-amine","1","arthritis,joint pain","musculoskeletal","compound","","12.1","50700","http://www.ncbi.nlm.nih.gov/pubmed/20847017","PubMed"],
["glutamine","0","gastrointestinal disease in infants","digestion,children","compound","","0.691","58500","",""],
["glutamine","0","morbidity and mortality in preterm infants","children","compound","","0.518","25900","",""],
["goji berry","1","eye health","general health","plant / herb","","7.06","2110","http://www.ncbi.nlm.nih.gov/pubmed/15604618",""],
["grape seed extract","0","wound healing,swelling","pain","plant / herb","","3.21","5410","http://www.ncbi.nlm.nih.gov/pubmed/16546280","PubMed"],
["grapefruit seed extract","0","antibiotic,antifungal","infections","plant / herb","","1.1","1010","","PubMed"],
["green tea","2","cholesterol","cardio","plant / herb","","11.7","40200","http://www.ncbi.nlm.nih.gov/pubmed/11897173","PubMed"],
["green tea","3","cancer prevention","cancer","plant / herb","","6.07","18700","http://www.cochrane.org/reviews/en/ab005004.html","Cochrane review"],
["horse chestnut seed extract","2","chronic venous insufficiency","cardio","plant / herb","OTW","0.347","341","http://www.ncbi.nlm.nih.gov/pubmed/16437450","PubMed"],
["hyaluronic acid","1","arthritis (only when injected)","musculoskeletal","compound","","7.16","42600","http://www.ncbi.nlm.nih.gov/pubmed/14679274","PubMed"],
["iodine","1.5","general health","general health","other","","18.9","510000","http://www.ncbi.nlm.nih.gov/pubmed/18590348","PubMed"],
["iron","2","child development (when not anaemic)","children,mental health,general health","mineral","","5.53","544000","http://www.ncbi.nlm.nih.gov/pubmed/20410098","PubMed"],
["krill oil","1","PMS","women","other","","2.69","922","http://www.ncbi.nlm.nih.gov/pubmed/12777162","PubMed"],
["krill oil","1","arthritis","musculoskeletal","other","","2.69","922","http://www.ncbi.nlm.nih.gov/pubmed/17353582","Deutsch 2007"],
["L-arginine","1.5","exercise performance","general health","compound","","6.23","116000","http://jap.physiology.org/cgi/content/abstract/japplphysiol.00503.2010v1","Journal of Applied Psysiology"],
["L-carnitine","1.5","diabetes,impotence","diabetes,sex","compound","","8.99","17500","http://www.jacn.org/cgi/content/full/18/1/77","PubMed"],
["L-lysine","2","herpes","sex,infections","compound","OTW","3.05","97300"," http://www.ncbi.nlm.nih.gov/pubmed/6435961","PubMed"],
["lavender","2","depression","mental health","plant / herb","","5.73","24100","http://www.ncbi.nlm.nih.gov/pubmed/12551734","PubMed"],
["lavender","0","sleep,relaxation","mental health","plant / herb","","19.7","33600","",""],
["leucine","3","protein synthesis","general health","compound","","4.52","224000","http://www.ncbi.nlm.nih.gov/pubmed/21775557","Pasiakos et al. 2011"],
["licorice root","3","dyspepsia","digestion","plant / herb","","1.6","4140","http://www.ncbi.nlm.nih.gov/pubmed/11505331","PubMed"],
["lingzhi + san miao san","1","arthritis","musculoskeletal","plant / herb","","1.61","2700","http://www.ncbi.nlm.nih.gov/pubmed/17907228",""],
["lutein","1","eye health","general health","compound","","6.1","23600","http://www.ncbi.nlm.nih.gov/pubmed/11431456","PubMd"],
["lycopene","0","prostate cancer","cancer,men","compound","","4.73","24800","http://www.ncbi.nlm.nih.gov/pubmed/16434593","PubMed"],
["magnesium","3","blood pressure","cardio","mineral","","10.7","10800","http://ncp.sagepub.com/cgi/content/abstract/23/2/142","Nutrition in Clinical Practice"],
["magnesium + vitamin B6","3","child ADHD","mental health,children","vitamin","","1.78","7410","http://www.ncbi.nlm.nih.gov/pubmed/16846100","PubMed"],
["melatonin","4","insomnia in the elderly","mental health","compound","","3.1","14800","http://www.ncbi.nlm.nih.gov/pubmed/18036082","PubMed"],
["milk thistle","2","hepatitis","infections","plant / herb","","1.09","2900","http://journals.lww.com/jcge/Abstract/2008/09000/Silybin_Treatment_is_Associated_With_Reduction_in.13.aspx",""],
["milk thistle","1","diabetes","diabetes","plant / herb","","0.655","2700","http://linkinghub.elsevier.com/retrieve/pii/S0168827897802553",""],
["MSM","2","arthritis","musculoskeletal","compound","","0.955","1240","http://www.ncbi.nlm.nih.gov/pubmed/16309928","PubMed"],
["N-acetyl cysteine (NAC)","4","mental health,addiction","mental health","other","OTW","0.127","106","http://www.ncbi.nlm.nih.gov/pubmed/18534556","Berk et al. 2008"],
["N-acetylcarnosine (topical application)","1","cataracts","general health","other","","0.709","31100","http://www.ncbi.nlm.nih.gov/pubmed/12001824","PubMed"],
["Na-R-ALA","0","insulin control","general health","compound","","0.043","6","",""],
["nettles","4","prostate-related urinary problems","urinary,men","plant / herb","OTW","5.02","24200","http://www.ncbi.nlm.nih.gov/pubmed/16635963","PubMed"],
["niacin (vitamin B3)","5","heart disease","cardio","vitamin","","12.1","45900","http://www.ncbi.nlm.nih.gov/pubmed/20208032","PubMed"],
["olive leaf extract","4","blood pressure,cholesterol","cardio","plant / herb","","1.76","1030","http://www.ncbi.nlm.nih.gov/pubmed/21036583","PubMed"],
["omega 3","2","child ADHD","mental health,children","compound","","2.73","4170","http://www.ncbi.nlm.nih.gov/pubmed/17435458","PubMed"],
["omega 3: ALA","1","heart disease","cardio","compound","","0.945","7380","http://www.ncbi.nlm.nih.gov/pubmed/15890766?dopt=Abstract&holding=f1000,f1000m,isrctn","PubMed"],
["omega 6","4","heart health","cardio","compound","","1.82","16600","http://circ.ahajournals.org/cgi/reprint/CIRCULATIONAHA.108.191627","American Heart Association"],
["omega 6","0","cancer","cancer","compound","","2.86","17000","http://jnci.oxfordjournals.org/cgi/content/abstract/97/21/1611?maxtoshow=&hits=10&RESULTFORMAT=&fulltext=eveing+primrose+oil&searchid=1&FIRSTINDEX=0&resourcetype=HWCIT","Journal of the National Cancer Institute"],
["pau d’arco","0","decongestant","general health","plant / herb","","0.971","1000","",""],
["peppermint oil","4","IBS","digestion","plant / herb","","2.1","8410","http://www.bmj.com/cgi/content/full/337/nov13_2/a2313","British Medical Journal"],
["piracetam","1.5","memory,dementia","mental health","compound","","0.559","4260","",""],
["poly-phenols","1","heart disease","cardio","compound","","5.23","61000","http://www.ncbi.nlm.nih.gov/pubmed/15640497","PubMed"],
["potassium","0","blood pressure","cardio","mineral","","12.2","770000","",""],
["probiotics","3","IBS","digestion","other","","3.32","21600","http://www.ncbi.nlm.nih.gov/pubmed/19277023","PubMed"],
["probiotics","3","diarrhoea,gastrointenstinal and respiratory infections","digestion,infections","other","","3.83","13900","http://www.ncbi.nlm.nih.gov/pubmed/20107143","PubMed"],
["probiotics","5","diarrhoea related to antibiotic use","digestion,infections","other","","3.83","13900","","Hempel et al 2012"],
["probiotics","1","athletic performance","general health","other","","1.28","3860","http://www.ncbi.nlm.nih.gov/pubmed/17618005","PubMed"],
["probiotics","0","cholesterol,blood pressure","cardio","other","","0.825","12100","",""],
["quercetin","1","athletic performance","general health","compound","","3.68","42000","http://journals.lww.com/acsm-msse/Abstract/2010/02000/Quercetin_s_Influence_on_Exercise_Performance_and.15.aspx",""],
["red yeast rice","3","cholesterol,heart disease","cardio","plant / herb","OTW","2.2","1760","http://www.ajconline.org/article/S0002-9149(08)00353-6/abstract","American Journal of Cardiology"],
["resveratrol","0","cancer,diabetes,heart health,metabolism","cancer,diabetes,cardio","compound","OTW","6.9","35100","http://www.cancerletters.info/article/S0304-3835(08)00252-8/abstract","Cancer Letters"],
["rhodiola rosea L.","4","fatigue","mental health,general health","plant / herb","","0.263","600","http://www.ncbi.nlm.nih.gov/pubmed/19016404","PubMed"],
["royal jelly","0","general health","general health","other","","5.76","4800","",""],
["SAM-e","3","depression","mental health","compound","","0.168","8900","http://www.ncbi.nlm.nih.gov/pubmed/19944301","Mischoulon,2009"],
["SAM-e","0","liver disease","general health","compound","","0.168","8900","",""],
["saw palmetto","0","prostate-related urinary problems","urinary,men","plant / herb","","5.57","14500","http://www.ncbi.nlm.nih.gov/pubmed/19370565","Cochrane Review"],
["selenium","1.5","cancer","cancer","mineral","","7.57","153000","http://www.ncbi.nlm.nih.gov/pubmed/20568891","PubMed"],
["silicic acid","0","Alzheimer's","mental health","compound","OTW","0.209","21200","http://www.ncbi.nlm.nih.gov/pubmed/16988476","PubMed"],
["slippery elm","0","sore throat","infections","plant / herb","","1.36","3350","",""],
["spirulina","2","blood pressure,cholesterol","cardio","plant / herb","","10.2","14100","http://www.lipidworld.com/content/6/1/33",""],
["St John's wort","3","depression,PMS","mental health,women","plant / herb","","6.55","13900","http://nccam.nih.gov/health/stjohnswort/sjw-and-depression.htm","NCCAM"],
["sunlight","3","kidney cancer in men","cancer,men","other","OTW","0.563","849","http://www3.interscience.wiley.com/journal/123313834/abstract?CRETRY=1&SRETRY=0","Cancer Journal"],
["taurine","1.5","weight loss,cholesterol","general health,cardio","compound","","1.17","6010","http://www.springerlink.com/content/4gnpvkgpg7ff7qc4/",""],
["taurine","0.5","bipolar disorder and alcholism","mental health","compound","","0.199","4300","http://www.ncbi.nlm.nih.gov/pubmed/22329472","Tolliver et al. 2012"],
["TMG (trimethylglycine)","1","metabolism","general health","compound","","0.225","1280","http://www.ncbi.nlm.nih.gov/pubmed/12399266","Schwab 2002"],
["tryptophan and 5-HTP","1","depression in women","mental health,women","compound","","6.45","224000","http://www.ncbi.nlm.nih.gov/pubmed/16767422","PubMed"],
["turmeric (curcumin)","1","cancer","cancer","plant / herb","OTW","17.5","17000","http://www.ncbi.nlm.nih.gov/pubmed/20214562","PubMed"],
["turmeric (curcumin)","1","peptic ulcer","digestion","plant / herb","OTW","0.893","5030","http://www.ncbi.nlm.nih.gov/pubmed/20438867","PubMed"],
["tyrosine","4","alertness,wakefulness,memory,depression","mental health","compound","","9.15","851000","http://www.ncbi.nlm.nih.gov/pubmed/7794222","PubMed"],
["ubiquinol","1","heart disease","cardio","compound","OTW","1.52","9190","http://www.ncbi.nlm.nih.gov/pubmed/19096107",""],
["valerian","3","insomnia","mental health","plant / herb","","3.25","4730","http://www.ncbi.nlm.nih.gov/pubmed/17145239","PubMed"],
["valerian","1","anxiety","mental health","plant / herb","OTW","5.79","9270","http://www.ncbi.nlm.nih.gov/pubmed/17054208",""],
["vitamin A: beta-carotene","0","cancer","cancer","vitamin","","1.41","19400","http://www.ncbi.nlm.nih.gov/pubmed/18689373","PubMed"],
["vitamin A: retinol","0","birth defects","children","vitamin","","2.91","30300","http://www.ncbi.nlm.nih.gov/pubmed/9431575","PubMed"],
["vitamin B12","4","cankersores","infections","vitamin","OTW","3","13200","http://www.jabfm.org/content/22/1/9.abstract","Volkov et al. 2009"],
["vitamin B2","1","migraine","pain","vitamin","","2.39","2760","http://www.ncbi.nlm.nih.gov/pubmed/15257686","PubMed"],
["vitamin B5","0","cholesterol,arthritis","cardio,musculoskeletal","vitamin","","0.0286","120","",""],
["vitamin B8","3","OCD,panic disorder,depression","mental health","vitamin","OTW","0.127","341","http://www.ncbi.nlm.nih.gov/pubmed/8780431","PubMed"],
["vitamin C","2","colds","infections","vitamin","","65.2","291000","http://www.ncbi.nlm.nih.gov/pubmed/17636648","PubMed"],
["vitamin D","5","general health,all-cause mortality","general health","vitamin","","20.4","248000","http://ebm.bmj.com/content/13/2/47.full","PubMed"],
["vitamin D","4","bone health","musculoskeletal","vitamin","","8.68","248000","http://www.ncbi.nlm.nih.gov/pubmed/18689393","PubMed"],
["vitamin D","4","flu","infections","vitamin","","15.3","606000","http://www.ncbi.nlm.nih.gov/pubmed/20219962","Urashima et al. 2010"],
["vitamin D","3","depression","mental health","vitamin","","37.5","572000","http://www.ncbi.nlm.nih.gov/pubmed?term=PMC3173027","Bertone-Johnson et al. 2011"],
["vitamin D","1","cancer","cancer","vitamin","OTW","9.36","31800","http://www.ncbi.nlm.nih.gov/pubmed/20164683","PubMed"],
["vitamin D","1","depression,mood disorders","mental health","vitamin","","3.94","229000","http://www.ncbi.nlm.nih.gov/pubmed/16554952","PubMed"],
["vitamin D","0","heart disease","cardio","vitamin","","5.76","12800","http://www.ncbi.nlm.nih.gov/pubmed/20816120","PubMed"],
["vitamin D","0","diabetes","diabetes","vitamin","","9.43","32300","http://www.ncbi.nlm.nih.gov/pubmed/20194237","PubMed"],
["vitamin E","0","mortality","general health","vitamin","","2.72","102000","http://med.over.net/javne_datoteke/novice/datoteke/13081-JAMA-antioxidants.pdf","American Medical Association"],
["vitamin K2","4","heart disease","cardio","vitamin","OTW","0.344","2070","http://www.ncbi.nlm.nih.gov/pubmed/20850029","Journal of Nutrition"],
["vitamin K2","3","osteoporosis","musculoskeletal","vitamin","","0.277","4370","http://www.ncbi.nlm.nih.gov/pubmed/10227010","Maturitas"],
["Vitamin K2","1","prostate cancer","cancer,men","vitamin","OTW","0.252","2850","http://www.ajcn.org/cgi/content/abstract/87/4/985","American Journal of Clinical Nutrition"],
["os","1","diabetes","diabetes","plant / herb","","25.4","190000","",""],
["xylitol","1","teeth","general health","compound","","3.14","18300","http://www.ncbi.nlm.nih.gov/pubmed/15153702","PubMed"],
["zinc","5","colds","infections","mineral","","1.85","10100","http://www.thecochranelibrary.com/details/file/1017735/CD001364.html","Cochrane Library"]];

var conditions = {};
var categories = {};

/* Processes the 2D array of supplements into categories and conditions objects. */
function readCategoriesAndConditions() {
  for (var i = 0; i < supplements.length; ++i) {
    var supp = supplements[i];
    var conds = supp[2].split(",");
    var cats = supp[3].split(",");

    for (var j = 0; j < cats.length; ++j) {
      var cat = cats[j];
      // for each category in this tuple, add all the conditions as subcategories
      if (cat !== "diabetes") {
        // initialize this category object if necessary
        if (!categories[cat]) {
          categories[cat] = [];
        }

        for (var k = 0; k < conds.length; ++k) {
          var cond = conds[k];
          // If this category does not already exist
          if (categories[cat].indexOf(cond) === -1) categories[cat].push(cond);

          if (cond == "weight loss") console.log(cond);

          // add this supplement object as a possible aid for this condition
          if (!conditions[cond]) {
            conditions[cond] = [];
          }
          conditions[cond].push(supp);
        }
      }
    }
  }
}


var conditionsModified = {};

function splitSupplementsByType() {
  for (cond in conditions) {
    var supps = conditions[cond];
    var typesToSupps = {};
    for (var i = 0; i < supps.length; ++i) {
      var s = supps[i];
      var type = s[4];
      if (!typesToSupps[type]) {
        typesToSupps[type] = [s];
      } else if (typesToSupps[type].indexOf(s) == -1) {
        typesToSupps[type].push(s);
      }
    }
    conditionsModified[cond] = typesToSupps;
  }
  console.log(JSON.stringify(conditionsModified));
}

readCategoriesAndConditions();
splitSupplementsByType();