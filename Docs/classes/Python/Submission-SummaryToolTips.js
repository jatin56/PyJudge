NDSummary.OnToolTipsLoaded("PythonClass:Submission",{6:"<div class=\"NDToolTip TClass LPython\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Submission</div></div></div><div class=\"TTSummary\">Class defines the submission of solution of a Question Stores the information about: User that submits the Solution Time of Submission Contest to whish The question belongs Whether the soolution is correct</div></div>",8:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype8\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">def login_required(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">function</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Extends the functainality of a funcion by checking log in condition.&nbsp; Checks if the user is logged in.if not redirect the user to home page with message \'Login Required\' parameters : Function on which decorator is applied</div></div>",9:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype9\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@app.route(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first last\"><span class=\"SHString\">&quot;/&quot;</span></td></tr></table></td><td class=\"PAfterParameters\">) def changePath()</td></tr></table></div><div class=\"TTSummary\">redirects to home page</div></div>",10:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype10\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@app.<span class=\"SHKeyword\">get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">home&quot;</td></tr></table></td><td class=\"PAfterParameters\">) def home()</td></tr></table></div><div class=\"TTSummary\">redirects to Dashboard of the user</div></div>",11:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype11\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@app.<span class=\"SHKeyword\">get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">dashboard&quot;</td></tr></table></td><td class=\"PAfterParameters\">) @login_required def dashboard()</td></tr></table></div><div class=\"TTSummary\">redirects to Dashboard of the user</div></div>",12:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype12\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@app.<span class=\"SHKeyword\">get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">contest/&lt;code&gt;/&lt;number&gt;&quot;</td></tr></table></td><td class=\"PAfterParameters\">) @login_required def question(code, number)</td></tr></table></div><div class=\"TTSummary\">Checks if the question and Contest it belongs does exists.&nbsp; If exists : it checks the current status of the contest And then returns the question state ment along with question numbers and contest code to the Template Parameters: code: Contest Code number: Question Number Return: Question Template</div></div>",13:"<div class=\"NDToolTip TFunction LPython\"><div class=\"TTSummary\">Checks if contest exists by validating the contest id.&nbsp; Checks the the current staus of code Parameters: code : contest code Return : Contest Template</div></div>",14:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype14\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@app.<span class=\"SHKeyword\">get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">question/&lt;path:path&gt;&quot;</td></tr></table></td><td class=\"PAfterParameters\">) def download(path)</td></tr></table></div><div class=\"TTSummary\">Downloads the question to local system Parameters: path :path to download from Return : Static Files: Downloadable Files</div></div>",15:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype15\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@app.<span class=\"SHKeyword\">get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">static/&lt;filepath:path&gt;&quot;</td></tr></table></td><td class=\"PAfterParameters\">) def server_static(filepath)</td></tr></table></div><div class=\"TTSummary\">Static files for server Parameters: path :path of file Return : Static Files</div></div>",16:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype16\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@app.<span class=\"SHKeyword\">get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">ranking/&lt;code&gt;&quot;</td></tr></table></td><td class=\"PAfterParameters\">) def contest_ranking(code)</td></tr></table></div><div class=\"TTSummary\">Generates rankinks of users in a Contest i.e the Contest results Validates the Sumbission And Contest Checks the number of correct submissions for each user and Added to list with tuples of Username Along with thier Scores . The tuples are added to list in descending order of the score .Then rankings are given to each Username in the list.</div></div>",17:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype17\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@app.<span class=\"SHKeyword\">get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">ranking&quot;</td></tr></table></td><td class=\"PAfterParameters\">) def rankings()</td></tr></table></div><div class=\"TTSummary\">Overall Ranking of the user over all the Contest.&nbsp; Parameters: None Return : Ranking Template with Overall Ranking</div></div>",18:"<div class=\"NDToolTip TFunction LPython\"><div class=\"TTSummary\">Downloads the question to local system Parameters: None Return : True: if Session exixsts for the user Logged In False: if Session not exixst for the user Logged In or if the s_id is not present or is wrong</div></div>",19:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype19\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">def createSession(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">username</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Create a session for the user Set up cookie for The current session with seesion id ,token and expiry time Parameters: username: Username of user For whom session is Created.&nbsp; Return : Redirects to user Dashoard</div></div>",20:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype20\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@app.post(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">login&quot;</td></tr></table></td><td class=\"PAfterParameters\">) def login()</td></tr></table></div><div class=\"TTSummary\">This function is called whenever user log in to the app Checks if the user entered the Right credentials for log in Parameters: None Return : Redirects to home if invalid credenial Else Creates the session for the user</div></div>",21:"<div class=\"NDToolTip TFunction LPython\"><div class=\"TTSummary\">This function is called whenever new user registers New User is Created in the Data base and his credentials are stored Checks if the user with same username already exisxts Parameters: None Return : Creates session for new user.</div></div>",22:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype22\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@app.<span class=\"SHKeyword\">get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">logout&quot;</td></tr></table></td><td class=\"PAfterParameters\">) def logout()</td></tr></table></div><div class=\"TTSummary\">Ends the session for the user Deletes the session cookie</div></div>",23:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype23\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@app.post(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">check/&lt;code&gt;/&lt;number&gt;&quot;</td></tr></table></td><td class=\"PAfterParameters\">) @login_required def file_upload(code, number)</td></tr></table></div><div class=\"TTSummary\">This Function is used to upload the submission to&nbsp; Question to the Server.&nbsp; Parameters: code: Contest Code number : Question No of ehich solution is uploaded Return : &quot;Wrong Answer!! : If solution is wrong &quot;Solved! Great Job! &quot; : If solution is correct</div></div>",24:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype24\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@app.error(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">404</td></tr></table></td><td class=\"PAfterParameters\">) def error404(error)</td></tr></table></div><div class=\"TTSummary\">Handles Error Parameter: error : Error rturned the App Return : Redirects to</div></div>"});