digraph model_graph {
  // Dotfile by Django-Extensions graph_models
  // Created: 2023-05-14 15:59
  // Cli Options: -a

  fontname = "Roboto"
  fontsize = 8
  splines  = true
  rankdir = "TB"

  node [
    fontname = "Roboto"
    fontsize = 8
    shape = "plaintext"
  ]

  edge [
    fontname = "Roboto"
    fontsize = 8
  ]

  // Labels


  django_contrib_admin_models_LogEntry [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    LogEntry
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>id</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>AutoField</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><B>content_type</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><B>ForeignKey (id)</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>user</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>ForeignKey (id)</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">action_flag</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">PositiveSmallIntegerField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">action_time</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">change_message</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">TextField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">object_id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">TextField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">object_repr</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  django_contrib_auth_models_Permission [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    Permission
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>id</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>AutoField</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>content_type</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>ForeignKey (id)</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">codename</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  django_contrib_auth_models_Group [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    Group
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>id</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>AutoField</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  django_contrib_contenttypes_models_ContentType [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    ContentType
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>id</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>AutoField</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">app_label</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">model</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  django_contrib_sessions_base_session_AbstractBaseSession [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    AbstractBaseSession
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">expire_date</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">session_data</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">TextField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  django_contrib_sessions_models_Session [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    Session<BR/>&lt;<FONT FACE="Roboto"><I>AbstractBaseSession</I></FONT>&gt;
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><I><B>session_key</B></I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><I><B>CharField</B></I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><I>expire_date</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><I>session_data</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><I>TextField</I></FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  core_abstract_models_AbstractModel [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    AbstractModel
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">created</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">public_id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">UUIDField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">updated</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  django_contrib_auth_models_PermissionsMixin [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    PermissionsMixin
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">is_superuser</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">BooleanField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  django_contrib_auth_base_user_AbstractBaseUser [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    AbstractBaseUser
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">last_login</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">password</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  core_user_models_User [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    User<BR/>&lt;<FONT FACE="Roboto"><I>AbstractModel,AbstractBaseUser,PermissionsMixin</I></FONT>&gt;
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>id</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>BigAutoField</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">avatar</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">ImageField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">bio</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">TextField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>created</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">email</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">EmailField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">faculty</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">first_name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">gender</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">group</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">is_active</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">BooleanField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">is_staff</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">BooleanField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">is_superuser</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">BooleanField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>last_login</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">last_name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">password</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><I>public_id</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><I>UUIDField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">status</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>updated</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">username</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  core_user_models_Skill [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    Skill<BR/>&lt;<FONT FACE="Roboto"><I>AbstractModel</I></FONT>&gt;
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>id</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>BigAutoField</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>owner</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>ForeignKey (id)</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>created</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">nane</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><I>public_id</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><I>UUIDField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>updated</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  core_abstract_models_AbstractModel [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    AbstractModel
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">created</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">public_id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">UUIDField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">updated</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  core_project_models_Project [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    Project<BR/>&lt;<FONT FACE="Roboto"><I>AbstractModel</I></FONT>&gt;
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>id</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>BigAutoField</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>author</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>ForeignKey (id)</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><B>participant1</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><B>ForeignKey (id)</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><B>participant2</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><B>ForeignKey (id)</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><B>participant3</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><B>ForeignKey (id)</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>created</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">description</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">TextField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">edited</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">BooleanField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><I>public_id</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><I>UUIDField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">technologies</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">title</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">type</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>updated</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  core_project_models_Tag [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    Tag<BR/>&lt;<FONT FACE="Roboto"><I>AbstractModel</I></FONT>&gt;
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>id</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>BigAutoField</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>created</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><I>public_id</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><I>UUIDField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>updated</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  core_abstract_models_AbstractModel [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    AbstractModel
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">created</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">public_id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">UUIDField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">updated</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  core_comment_models_Comment [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    Comment<BR/>&lt;<FONT FACE="Roboto"><I>AbstractModel</I></FONT>&gt;
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>id</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>BigAutoField</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>author</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>ForeignKey (id)</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>project</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>ForeignKey (id)</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">body</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">TextField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>created</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">edited</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">BooleanField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><I>public_id</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><I>UUIDField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>updated</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  core_abstract_models_AbstractModel [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    AbstractModel
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">created</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">public_id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">UUIDField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto">updated</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  core_join_models_Join [label=<
    <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
    <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
    Join<BR/>&lt;<FONT FACE="Roboto"><I>AbstractModel</I></FONT>&gt;
    </B></FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>id</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>BigAutoField</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>applicant</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>ForeignKey (id)</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><B>project</B></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><B>ForeignKey (id)</B></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">accepted</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">BooleanField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>created</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">edited</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">BooleanField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto">message</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto">TextField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Roboto"><I>public_id</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Roboto"><I>UUIDField</I></FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>updated</I></FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  // Relations

  django_contrib_admin_models_LogEntry -> core_user_models_User
  [label=" user (logentry)"] [arrowhead=none, arrowtail=dot, dir=both];

  django_contrib_admin_models_LogEntry -> django_contrib_contenttypes_models_ContentType
  [label=" content_type (logentry)"] [arrowhead=none, arrowtail=dot, dir=both];


  django_contrib_auth_models_Permission -> django_contrib_contenttypes_models_ContentType
  [label=" content_type (permission)"] [arrowhead=none, arrowtail=dot, dir=both];

  django_contrib_auth_models_Group -> django_contrib_auth_models_Permission
  [label=" permissions (group)"] [arrowhead=dot arrowtail=dot, dir=both];



  django_contrib_sessions_models_Session -> django_contrib_sessions_base_session_AbstractBaseSession
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];


  core_user_models_User -> django_contrib_auth_models_Group
  [label=" groups (user)"] [arrowhead=dot arrowtail=dot, dir=both];

  core_user_models_User -> django_contrib_auth_models_Permission
  [label=" user_permissions (user)"] [arrowhead=dot arrowtail=dot, dir=both];

  core_user_models_User -> core_user_models_Skill
  [label=" skills (user)"] [arrowhead=dot arrowtail=dot, dir=both];

  core_user_models_User -> core_project_models_Project
  [label=" projects_liked (liked_by)"] [arrowhead=dot arrowtail=dot, dir=both];

  core_user_models_User -> core_abstract_models_AbstractModel
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];

  core_user_models_User -> django_contrib_auth_base_user_AbstractBaseUser
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];

  core_user_models_User -> django_contrib_auth_models_PermissionsMixin
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];

  core_user_models_Skill -> core_user_models_User
  [label=" owner (skill)"] [arrowhead=none, arrowtail=dot, dir=both];

  core_user_models_Skill -> core_abstract_models_AbstractModel
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];


  core_project_models_Project -> core_user_models_User
  [label=" author (project)"] [arrowhead=none, arrowtail=dot, dir=both];

  core_project_models_Project -> core_user_models_User
  [label=" participant1 (participant1)"] [arrowhead=none, arrowtail=dot, dir=both];

  core_project_models_Project -> core_user_models_User
  [label=" participant2 (participant2)"] [arrowhead=none, arrowtail=dot, dir=both];

  core_project_models_Project -> core_user_models_User
  [label=" participant3 (participant3)"] [arrowhead=none, arrowtail=dot, dir=both];

  core_project_models_Project -> core_project_models_Tag
  [label=" tags (project)"] [arrowhead=dot arrowtail=dot, dir=both];

  core_project_models_Project -> core_abstract_models_AbstractModel
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];

  core_project_models_Tag -> core_abstract_models_AbstractModel
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];


  core_comment_models_Comment -> core_project_models_Project
  [label=" project (comment)"] [arrowhead=none, arrowtail=dot, dir=both];

  core_comment_models_Comment -> core_user_models_User
  [label=" author (comment)"] [arrowhead=none, arrowtail=dot, dir=both];

  core_comment_models_Comment -> core_abstract_models_AbstractModel
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];


  core_join_models_Join -> core_user_models_User
  [label=" applicant (join)"] [arrowhead=none, arrowtail=dot, dir=both];

  core_join_models_Join -> core_project_models_Project
  [label=" project (join)"] [arrowhead=none, arrowtail=dot, dir=both];

  core_join_models_Join -> core_abstract_models_AbstractModel
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];


}
